import { Flex, Box, Button } from 'monday-ui-react-core';
//import { Link as RouteLink } from "react-router-dom";
//import { useTranslation } from 'react-i18next';
import { HeaderMenu } from "./header"; 
//import Messenger from './messenger'; // for loading porpuses
import WebContent from './content';

export const Home = (props) => {
    console.log("props.header", props.header)
    const HomeBlock = (props) => {
        return (
            <Box className={'ni-layout-home-block'} >
                <WebContent info={props.detail} />
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
                <HomeBlock detail={props.content?.intro_left.component?.elements} />
                <HomeBlock detail={props.content?.intro_right.component?.elements} />
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
                {/*<FixedMenu content={props.footer} /> */}
            </Flex>
    );
}

export default Home;