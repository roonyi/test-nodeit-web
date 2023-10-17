import { Flex, Box, Button } from 'monday-ui-react-core';
//import { Link as RouteLink } from "react-router-dom";
import { HeaderMenu } from "./header"; 
//import Messenger from './messenger'; // for loading porpuses
import WebContent from './content';

export const Home = (props) => {
    console.log("props.header", props.header)
    const HomeBlock = (props) => {
        return (
            <Box className={'ni-layout-home-block'}  >
                <WebContent info={props.detail}  contentClassName={props.contentClassName}/>
            </Box>
        );
    }

    const HomeIntro = (props) => {
/*        let intros = props.content?.intro.component?.elements
        console.log("intros: ", intros)
        console.log ("intros: ", Object.keys(intros))
        Object.keys(intros).map((key) => {
            if (intros[key].render !== 'Asset'){
                console.log("intros_right: ", intros[key].render)
            }else {
                console.log("intros_left: ", intros[key].render)
            }
        })  */
        console.log("props.content?.intro_left.component?.elements: ", props.content?.intro_left.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-intro'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <HomeBlock detail={props.content?.intro_left.component?.elements} contentClassName={'ni-layout-title-text'}/>
                <HomeBlock detail={props.content?.intro_right.component?.elements} />
            </Flex>
        );
    };

    const HomeApproach_title = (props) => {
        console.log("props.content?.approach_title.component?.elements: ", props.content?.approach_title.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-approach'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <HomeBlock detail={props.content?.approach_title.component?.elements} />
            </Flex>
        );
    };

    const HomeApproach_cards = (props) => {
        console.log("props.content?.approach_cards.component?.elements: ", props.content?.approach_cards.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-approach'} 
                direction={Flex.directions.COLUMN}
                gap={Flex.gaps.SMALL} >
                <HomeBlock detail={props.content?.approach_cards.component?.elements} />
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
                <HomeIntro content={props.home} />
                <HomeApproach_title content={props.home} />
                <HomeApproach_cards content={props.home} />
            </Flex>
    );
}

export default Home;