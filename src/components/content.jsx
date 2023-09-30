import { Flex, TextWithHighlight, Button } from 'monday-ui-react-core';
import { Link as RouteLink } from "react-router-dom";

export const WebGroup = (props) => {
    const WebItem = (props) => {
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={`ni-layout-${props.head}`} 
                direction={Flex.directions.COLUMN} 
                gap={Flex.gaps.SMALL} >
                <WebContent info={props.detail} alterClassHint={props.alterClassHint} contentClassName={props.contentClassName} />
            </Flex>
        );
    }
    return (
        Object.entries(props.detail).map(([key, value]) => (
            <WebItem key={key} head={key} detail={value} alterClassHint={props.alterClassHint} contentClassName={props.contentClassName} />
        ))
    );
}

export const WebContent = (props) => {
    const styleClass = (props.contentClassName === undefined) ? '' : ` ${props.contentClassName}`;
    const alterClass = (props.alterClassHint === undefined) ? '' : `-${props.alterClassHint}`;

    const WebAsset = (props) => {
        console.log("props.element: ",props.element)
        if (props.element.link === '') {
            return (
                <img src={props.element.file[0]} className={`ni-layout${props.alterClass}-image${props.styleClass}`} />
            )
        } else {
            return (
                <RouteLink to={props.element.link}>
                    <img src={props.element.file[0]} className={`ni-layout${props.alterClass}-image${props.styleClass}`} />
                </RouteLink>
            )
        }
    }

    const WebList = (props) => {
        return (
            props.info?.map((element) => {
                //console.log(element)
                switch (element.type) {
                    case 'Text':
                        return (<span key={element.key} className={`ni-layout${alterClass}-text${styleClass}`}>{element.translation}</span>);
                    case 'Title':
                        return (<p key={element.key} className={`ni-layout${alterClass}-title${styleClass}`}>{element.translation}</p>);
                    case 'Subtitle':
                        return (<p key={element.key} className={`ni-layout${alterClass}-subtitle${styleClass}`}>{element.translation}</p>);
                    case 'Bullet':
                        return (<TextWithHighlight
                            key={element.key} 
                            className={styleClass}
                            highlightTerm={t('solutions.modal.highlight')}
                            text={element.translation}
                          />);
;                    case 'Link':
                        return (
                            <RouteLink key={element.key} to={element.link} state={{entry: element}} className={`ni-layout${alterClass}-link${styleClass}`} >
                                {element.translation}
                            </RouteLink>
                        );
                    case 'Asset':
                        return (<WebAsset key={element.key} element={element} styleClass={styleClass} alterClass={alterClass} />);
                    case 'Logo':
                        return (<img key={element.key} src={element.file[0]} className={`ni-layout${alterClass}-logo${styleClass}`} />);
                    case 'Button':
                        return (
                            <RouteLink key={element.key} to={element.link} >
                                <Button kind={Button.kinds.SECONDARY} className={'ni-home-button'} >
                                    {element.translation}
                                </Button>
                            </RouteLink>
                        );
                    default:
                        return <span key={element.key} className={styleClass}>{element.name}</span>
                }
            })
        );
    }

    return (
        <WebList {...props} />
    );
}

export default WebContent;