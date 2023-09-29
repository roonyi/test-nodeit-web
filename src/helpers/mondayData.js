const proxy = import.meta.env.VITE_MNDY_RD_PROXY;
const server = import.meta.env.VITE_MNDY_RD_SERVER;
const id = import.meta.env.VITE_MNDY_RD_HINT_ID; //access id (for dynamic access)
const search = `id=${id}&q=`;
const request = `${proxy}${server}${search}`;
const limit = 10;
const boardId = import.meta.env.VITE_MNDY_RD_BOARD_ID;

const fetchQueryInfo = async (query) => {
  let result = undefined;
  await fetch(query)
    .then((res) => res.json())
    .then((res) => {
      if (res.success === true) {
        const dict = JSON.parse(res.results);
        result = dict.data;
      }
    });

  return result;
}

const fetchDelay = (seconds) => new Promise(res => setTimeout(res, seconds * 1000));

const fetchBoardInfo = async () => {
  const query = `{
        complexity {
          query
          before
          after
          reset_in_x_seconds
        }
        info: boards(ids: ${boardId}, limit: 1) {
          id
          name
          groups {
            id
            title
          }
        }
      }`;

  let result = await fetchQueryInfo(`${request}${query}`);

  return result?.info;
}

const fetchBoardItemInfo = async (page = 1) => {
  const query = `{
        complexity {
          query
          before
          after
          reset_in_x_seconds
        }
        boardItems: boards(ids: ${boardId}, limit: 1) {
          items(limit: ${limit}, page: ${page}) {
            id
            name
            group {
              id
            }
            assets {
              id
              name
              public_url
            }
            state
            column_values {
              id
              value
              text
              title
              type
            }
            subitems {
              id
            }
          }
        }
      }`;

  let info = await fetchQueryInfo(`${request}${query}`);
  let result = [];

  const fetchTimeoutBoardItemInfo = async (page, timeout) => {
    await fetchDelay(timeout);
    return await fetchBoardItemInfo(page);
  };

  if (info.boardItems[0].items.length > 0) {
    result = result.concat(info.boardItems[0].items);
    if (info.complexity.query <= info.complexity.after) {
      result = result.concat(await fetchBoardItemInfo(page + 1));
    } else {
      const timeout = info.complexity.reset_in_x_seconds + 1;
      result = result.concat(await fetchTimeoutBoardItemInfo(page + 1, timeout));
    }
  }
  
  return result;
}

const fetchItemListInfo = async (itemIds, page = 1) => {
  const query = `{
        complexity {
          query
          before
          after
          reset_in_x_seconds
        }
        boardSubitems: items(ids: [${itemIds.join(', ')}], limit: ${limit}, page: ${page}) {
          id
          name
          group {
            id
          }
          assets {
            id
            name
            public_url
          }
          state
          column_values {
            id
            value
            text
            title
            type
          }
          subitems {
            id
          }
        }
      }`;

  let info = await fetchQueryInfo(`${request}${query}`);
  let result = [];

  const fetchTimeoutItemListInfo = async (itemIds, page, timeout) => {
    await fetchDelay(timeout);
    return await fetchItemListInfo(itemIds, page);
  };

  if (info.boardSubitems.length > 0) {
    result = result.concat(info.boardSubitems);
    if (info.complexity.query <= info.complexity.after) {
      result = result.concat(await fetchItemListInfo(itemIds, page + 1));
    } else {
      const timeout = info.complexity.reset_in_x_seconds + 1;
      result = result.concat(await fetchTimeoutItemListInfo(itemIds, page + 1, timeout));
    }
  }

  return result;
}

const listSubitems = (itemInfo) => {
  const itemList = new Set();
  itemInfo.forEach((item) => {
    item.subitems?.forEach((subitem) => {
      itemList.add(parseInt(subitem.id));
    }
    );
  });

  return [...itemList];
}

export const fetchServerData = async () => {
  let board = await fetchBoardInfo();
  let items = await fetchBoardItemInfo();
  let subitems = await fetchItemListInfo(listSubitems(items));
  
  return {
    board: board,
    items: items,
    subitems: subitems
  }
}