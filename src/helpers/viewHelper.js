export const buildWebDetail = (boardDetail) => {
    const result = {};
    const subitemMap = mapSubitems(boardDetail?.subitems);

    boardDetail?.items?.forEach((item) => {
        const content = {
            id: item.id,
            title: item.name, 
            group: getGroupTitle(boardDetail.board, item.group.id),
            type: getColumnValue('Type', item.column_values, item.assets),
            scope: getColumnValue('Scope', item.column_values, item.assets),
            publish: getColumnValue('Publish', item.column_values, item.assets),
            detail: readContentDetail(item.subitems, subitemMap)
        };
        updateDetailMap(result, content, 'group');
    });
    return result;
}

const sortBySeq = (a, b) => {
    return a.sequence - b.sequence;
}

const orderContentDetail = (detail) => {
    const sortBySubseq = (a, b) => {
        return a[1][0]?.sequence - b[1][0]?.sequence;
    };
    const updated = {};
    const orderArray = Object.entries(detail).map(([key, value]) => {
        return [key, value];
    });
    orderArray.sort(sortBySubseq);
    orderArray.forEach((element) => {
        updated[element[0]] = element[1];
    });
    
    return updated;
}

const readContentDetail = (subitems, map) => {
    const detail = {};
    subitems?.forEach((subitem) => {
        const data = map.get(subitem.id);
        updateDetailMap(detail, data, 'group');
    });

    return orderContentDetail(detail);
}

// it creates de detail?.header and detail?.footer
const updateDetailMap = (rootMap, item, key, subKey=undefined) => {
    const element = rootMap[item[key].toLowerCase()];
    if (element !== undefined) {
        if (subKey !== undefined) {
            updateDetailMap(element, item, subKey);
        } else {
            element.push(item);
            element.sort(sortBySeq);
        }
    } else {
        if (subKey !== undefined) {
            const subItem = {};
            subItem[item[subKey].toLowerCase()] = [item];
            rootMap[item[key].toLowerCase()] = subItem;
        } else {
            rootMap[item[key].toLowerCase()] = [item];
        }
    }
}

const mapSubitems = (subitems) => {
    const result = new Map();
    
    subitems?.forEach((subitem) => {
        if (subitem.state === 'active') {
            const data = {
                key: subitem.id,
                name: subitem.name,
                render: getColumnValue('Render', subitem.column_values, subitem.assets),
                sequence: getColumnValue('Sequence', subitem.column_values, subitem.assets),
                content: getColumnValue('Content', subitem.column_values, subitem.assets),
                link: getColumnValue('Link', subitem.column_values, subitem.assets),
                files: getColumnValue('Files', subitem.column_values, subitem.assets),
                group: getColumnValue('Group', subitem.column_values, subitem.assets)            };
            result.set(subitem.id, data);
        }
    });

    return result;
}

const getGroupTitle = (board, groupid) => { 
    let value = undefined;
    board?.forEach((boards) => {
        boards?.groups?.forEach((group) => {
            if (group.id === groupid) {
                value = group.title
            }
        }); 
    });
    return value;    
}

const getColumnValue = (key, columns, assets) => {
    const element = columns.find((column) => {
        return column.title === key;
    });

    let value = undefined;
    if (element !== undefined) {
        switch (element.type) {
            case 'color':
                value = element.text;
                break;
            case 'date':
                value = element.text;
                break;
            case 'file':
                value = getAssets(element.value, assets)
                break;
            case 'link':
                value = element.value !== null ? JSON.parse(element.value).url : '';
                break;
            case 'long-text':
                value = element.text;
                break;
            case 'board-relation':
                value = element.text;
                break;
            case 'lookup':
                value = element.text;
                break;
            case 'boolean':
                value = element.value !== null;
                break;
            case 'text':
                value = element.text;
                break;
            case 'numeric':
                value = parseInt(element.text);
                break;
            default:
                break;
        }
    }
    
    return value;
}

const getAssets = (ids, assets) => {
    let assetList = [];
    if (ids !== null && assets !== null) {
        const obj = JSON.parse(ids);
        const files = JSON.parse(ids).files;
        const idList = files.map((file) => {
            return file.assetId
        });
        const list = assets.filter((asset) => {
            return idList.includes(parseInt(asset.id));
        });
        assetList = list.map((element) => {
            return element.public_url;
        });
    }
    return assetList;
}