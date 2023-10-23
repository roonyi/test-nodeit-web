import { Flex, Box, Accordion, AccordionItem } from 'monday-ui-react-core';
//import { Link as RouteLink } from "react-router-dom";
import { HeaderMenu } from "./header"; 
import { FooterMenu } from "./footer"; 
//import Messenger from './messenger'; // for loading porpuses
import WebContent from './content';

export const Faq = (props) => {
    console.log("props.header", props.header)
    const FaqBlock = (props) => {
        return (
            <Box className={'ni-layout-home-block'}  >
                <WebContent info={props.detail}  contentClassName={props.contentClassName} alterClassHint={props.alterClassHint}/>
            </Box>
        );
    }

    const FaqIntro = (props) => {
        console.log("props.content?.faq_title.component?.elements: ", props.content?.title.component?.elements)
        return (
            <Flex
                justify={Flex.justify.START} 
                align={Flex.justify.START} 
                className={'ni-layout-home-intro'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} 
                >
                <FaqBlock detail={props.content?.title.component?.elements} contentClassName={'ni-layout-home-intro-title-text'}/>                
            </Flex>
            
        );
    };

    const Faq = (props) => {
        console.log("props.content?.questions.component?.elements: ", props.content?.questions.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-faq'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <FaqBlock detail={props.content?.questions.component?.elements} alterClassHint={'faq'}/>

            </Flex>
        );
    };

    return (
        //(props.home === undefined) ? 
            //<Messenger message={'loader'} /> :
            //console.log("prop.header", props.header)
            <Flex
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home'} 
                direction={Flex.directions.COLUMN} 
                gap={Flex.gaps.NONE} >
                <HeaderMenu content={props.header} />
                <FaqIntro content={props.faq} />
                <Faq content={props.faq} />
                <FooterMenu content={props.footer} />

            </Flex>
    );
}

export default Faq;