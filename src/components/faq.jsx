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
                <WebContent info={props.detail}  contentClassName={props.contentClassName}/>
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
                <FaqBlock detail={props.content?.questions.component?.elements} />

            </Flex>
        );
    };

    const AboutusApproach_cards = (props) => {
        //console.log("props.content?.approach_cards.component?.elements: ", props.content?.approach_cards.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-approach'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <AboutusBlock detail={props.content?.approach_cards.component?.elements} />
            </Flex>
        );
    };

    const AboutusTeam_title = (props) => {
        console.log("props.content?.team_title.component?.elements: ", props.content?.team_title.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-products'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <AboutusBlock detail={props.content?.team_title.component?.elements} contentClassName={'ni-layout-home-products-title'}/>
            </Flex>
        );
    };

    const AboutusTeam = (props) => {
        console.log("props.content?.team.component?.elements: ", props.content?.team.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-products'} 
                direction={Flex.directions.COLUMN}
                gap={Flex.gaps.SMALL} >
                <AboutusBlock detail={props.content?.team.component?.elements} />
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