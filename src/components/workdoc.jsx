import { Flex } from 'monday-ui-react-core';
import { HeaderMenu } from "./header"; 
import { FooterMenu } from "./footer"; 
import WebContent from './content';

export const Workdoc = (props) => {

    const WorkdocInfo = (props) => {
        console.log('workdoc: ', props);
        //armar webcontent
        return (
            props.content?.links?.component?.elements.map((element) => {
                switch (element.name) {
                    case props.contentname:
                        // {console.log('element1', element)}
                        // {console.log('element2', props.content?.links?.component?.elements)}
                        // Object.keys(element).map((key) => {
                        //     console.log('element3', element[key])
                        // }
                        // <WebContent info={element}/>
                        return(
                        <iframe className={'ni-layout-workdoc-info'} src={element.link} title={element.name}>
                            {'Webpage is loading...'}
                        </iframe>
                        )
                }
            })
        );
    };

    return (
        (props.workdoc === undefined) ? 
            <span>Webpage not loading...</span> :
            <Flex
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-workdoc'} 
                direction={Flex.directions.COLUMN} 
                gap={Flex.gaps.NONE} >
                <HeaderMenu content={props.header} />
                <WorkdocInfo content={props.workdoc} contentname={props.workdocname}/>
                <FooterMenu content={props.footer} />
            </Flex>
    );
}

export default Workdoc;