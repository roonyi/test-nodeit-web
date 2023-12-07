import { Flex, TextWithHighlight, Button, Accordion, AccordionItem, Clickable  } from 'monday-ui-react-core';
import { Link as RouteLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

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
    // console.log("props.info in weblist content*: ", props.info, props)
    // console.log("props.target: ", props.target)
    const WebAsset = (props) => {
        // console.log("props.element in content: ", props.element, props)
        if (props.element.link === '') {
            return (
                <img src={props.element.files[0]} className={`ni-layout${props.alterClass}-image${props.styleClass}`} />
            )
        } else {
            let linkContent = props.element.link.split("#")
            if (props.element.render === 'Asset') {
                console.log("props.element.link", props.element.link)
                return (
                    // <RouteLink to={props.element.link} >
                    <RouteLink  to={linkContent[0]}>
                        <Clickable onClick={() => props.scrollCallBack(linkContent[1])}> 
                            <img src={props.element.files[0]} className={`ni-layout${props.alterClass}-image${props.styleClass}`} />
                        </Clickable>
                    </RouteLink>
                )
            } else { //if is Asset_newpage
                return (
                    <RouteLink to={props.element.link} target={'_blank'}>
                        <img src={props.element.files[0]} className={`ni-layout${props.alterClass}-image${props.styleClass}`} />
                    </RouteLink>
                )
            }
        }
    }
      
    const WebList = (props) => {
        // console.log("webcontent12 ", props.info)
        return (
            props.info?.map((element) => {
                switch (element.render) {
                    case 'Text':
                        return (<span key={element.key} className={`ni-layout${alterClass}-text${styleClass}`}>{element.content}</span>);
                    case 'Title':
                        return (<p key={element.key} className={`ni-layout${alterClass}-title${styleClass}`}>{element.content}</p>);
                    case 'Subtitle':
                        return (<p key={element.key} className={`ni-layout${alterClass}-subtitle${styleClass}`}>{element.content}</p>);
                    case 'Bullet':
                        return (<TextWithHighlight
                            key={element.key} 
                            className={styleClass}
                            // highlightTerm={t('solutions.modal.highlight')}
                            text={element.content}
                          />);
                    case 'Link':
                        let linkContent = element.link.split("#")
                        console.log("from_scroll_content", linkContent[1])
                        return ( 
                            <RouteLink 
                            key={element.key} 
                            to={linkContent[0]}
                            // to={element.link}
                            // state={{from: linkContent[1]}} 
                            state={linkContent[1]} 
                            className={`ni-layout${alterClass}-link${styleClass}`} 
                            onClick={() => props.scrollCallBack(linkContent[1])}
                            // onClick={() => alert("texto")}
                            >
                                {/* <Clickable onClick={() => props.scrollCallBack(linkContent[1])}> */}
                                {/* <Clickable onClick={() => alert("texto")}>  */}
                                    {element.name}
                                {/* </Clickable> */}
                            </RouteLink>
                        );
                    case 'Link_newpage':
                        return (
                            <RouteLink key={element.key} to={element.link} state={{entry: element}} className={`ni-layout${alterClass}-link${styleClass}`} target={'_blank'}>
                                {element.name}
                            </RouteLink>
                        );    
                    case 'Asset':
                        console.log("*: ", props)
                        return (<WebAsset key={element.key} element={element} styleClass={styleClass} alterClass={alterClass} {...props}/>);
                    case 'Asset_newpage':
                        return (<WebAsset key={element.key} element={element} styleClass={styleClass} alterClass={alterClass} target={'_blank'}/>);
                    case 'Accordion':
                        let ques_ans = element.content.split("##")
                        return (
                            <Accordion key={element.key} >
                                    <AccordionItem title={ques_ans[0]} className={`ni-layout${alterClass}-question${styleClass}`} >
                                        <span className={`ni-layout${alterClass}-answer${styleClass}`}>{ques_ans[1]}</span>
                                    </AccordionItem>
                            </Accordion>
                            );
                    case 'Logo':
                        return (<img key={element.key} src={element.files[0]} className={`ni-layout${alterClass}-logo${styleClass}`} />);
                    case 'Card_btn':
                        let card_cont_btn = element.content.split("##")
                        return (
                            <Col>
                            <div className='card'>
                                <img src={element.files[0]} className={`ni-layout${alterClass}-image${styleClass}`} />
                                <div className='card-body'>
                                    <RouteLink key={element.key} to={element.link} >
                                        <h5 className='btn btn-primary-card '>{card_cont_btn[0]}</h5>
                                    </RouteLink>    
                                    <h6 className='card-text'>{card_cont_btn[1]}</h6>
                                </div>
                            </div>
                            </Col>
                        );
                    case 'Card':
                        let card_cont = element.content.split("##")
                        return (
                            <Col>
                            <div className='card'>
                                <img src={element.files[0]} className={`ni-layout${alterClass}-image${styleClass}`} />
                                <div className='card-body'>
                                    <h5 className='card-title'>{card_cont[0]}</h5>
                                    <h6 className='card-text'>{card_cont[1]}</h6>
                                </div>
                            </div>
                            </Col>
                        );
                    case 'Button':
                        return (
                            <RouteLink key={element.key} to={element.link} >
                                <Button kind={Button.kinds.SECONDARY} className={'ni-home-button'} >
                                    {element.content}
                                </Button>
                            </RouteLink>
                        );
                    case 'Paragraph':
                        return (
                            <span key={element.key} >{element.content}</span>
                        );    
                    // case 'Workdoc':
                    //     return (
                    //         <iframe className={'ni-layout-workdoc-info'} src={element.link} title={element.name}>
                    //              {'Webpage is loading...'}
                    //         </iframe>
                    //     );
                    default:
                        return <span key={element.key} className={styleClass}>{element.name}</span>
                }
            })
        );
    }
    console.log("props.info in weblist content: **", props.info, props)
    return (
        <WebList {...props} />
    );
}

export default WebContent;