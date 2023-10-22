import { Flex, Box, Button } from 'monday-ui-react-core';
//import { Link as RouteLink } from "react-router-dom";
import { HeaderMenu } from "./header"; 
import { FooterMenu } from "./footer"; 
//import Messenger from './messenger'; // for loading porpuses
import WebContent from './content';

export const Aboutus = (props) => {
    console.log("props.header", props.header)
    const AboutusBlock = (props) => {
        return (
            <Box className={'ni-layout-home-block'}  >
                <WebContent info={props.detail}  contentClassName={props.contentClassName} alterClassHint={props.alterClassHint}/>
            </Box>
        );
    }

    const AboutusIntro = (props) => {
        console.log("props.content?.who_we_are_left.component?.elements: ", props.content?.who_we_are_left.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-intro'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} 
                >
                <AboutusBlock detail={props.content?.who_we_are_left.component?.elements} contentClassName={'ni-layout-home-intro-title-text'}/>                
                <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.START} 
                className={'ni-layout-who-we-are-intro'} 
                direction={Flex.directions.COLUMN}
                gap={Flex.gaps.SMALL} 
                >
                <AboutusBlock detail={props.content?.who_we_are_right.component?.elements} contentClassName={'ni-layout-home-intro-text'} />
                </Flex>
            </Flex>
            
        );
    };

    const AboutusApproach_title = (props) => {
        console.log("props.content?.approach_title.component?.elements: ", props.content?.approach_title.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-approach'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <AboutusBlock detail={props.content?.approach_title.component?.elements} contentClassName={'ni-layout-home-approach-title-text'}/>
            </Flex>
        );
    };

    const AboutusApproach_cards = (props) => {
        //console.log("props.content?.approach_cards.component?.elements: ", props.content?.approach_cards.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-card-approach'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <WebContent info={props.content?.approach_cards.component?.elements} alterClassHint={'card'}/>
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
                className={'ni-layout-card-products'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <WebContent info={props.content?.team.component?.elements} alterClassHint={'card'}/>
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
                <AboutusIntro content={props.aboutus} />
                <AboutusApproach_title content={props.aboutus} />
                <AboutusApproach_cards content={props.aboutus} />
                <AboutusTeam_title content={props.aboutus} />
                <AboutusTeam content={props.aboutus} />
                <FooterMenu content={props.footer} />

            </Flex>
    );
}

export default Aboutus;