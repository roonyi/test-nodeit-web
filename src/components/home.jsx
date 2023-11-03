import { Flex, Box, Button } from 'monday-ui-react-core';
import React, { useRef } from "react";
//import { Link as RouteLink } from "react-router-dom";
import { HeaderMenu } from "./header"; 
import { FooterMenu } from "./footer"; 
//import Messenger from './messenger'; // for loading porpuses
import WebContent from './content';
import { Container, Row, Col } from 'react-bootstrap';

export const Home = (props) => {
    console.log("props.header", props.header)
    
    const viewRef = {
        menu: useRef(),
        footer: useRef(),
        products: useRef()
    };

    const scrollCallBack = (view) => {
        viewRef[view]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
                <Container fluid
                    >
                    <Row >    
                        <Col sm="5" >
                            <Row >
                                <Flex
                                // className={'ni-layout-home-intro'} 
                                direction={Flex.directions.COLUMN}>
                                    <WebContent info={props.content?.intro_left.component?.elements} contentClassName={'ni-layout-home-intro-title-text'}/>
                                </Flex>
                            </Row>
                        </Col>
                        <Col > 
                            <WebContent info={props.content?.intro_right.component?.elements} contentClassName={'ni-layout-home-intro-title-img'}/>
                        </Col>
                    </Row>    
                </Container>
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
                <Container fluid>
                    <Col>
                        <WebContent info={props.content?.approach_title.component?.elements} contentClassName={'ni-layout-home-approach-title-text'}/>
                    </Col>
                </Container>    
            </Flex>
        );
    };

    const HomeApproach_cards = (props) => {
        console.log("props.content?.approach_cards.component?.elements: ", props.content?.approach_cards.component?.elements)
        return (
            <Flex 
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-card-approach'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <Container fluid
                    align={Flex.justify.CENTER}
                    >
                    <Row >   
                        <WebContent info={props.content?.approach_cards.component?.elements} alterClassHint={'card'}/>
                    </Row>
                </Container>
            </Flex>
        );
    };

    const HomeProducts = (props) => {
        console.log("props.content?.products_title.component?.elements: ", props.content?.products_title.component?.elements)
        return (
            <Flex  
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-products'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL}
                >
                <Container fluid
                align={Flex.justify.CENTER}
                >
                        <Row >   
                            <Col>
                                <WebContent info={props.content?.products_title.component?.elements} contentClassName={'ni-layout-home-products-title'}/>
                            </Col>
                            <WebContent info={props.content?.products.component?.elements} alterClassHint={'card'}/>
                        </Row>
                </Container>
            </Flex>
        );
    };

    return (
        //(props.home === undefined) ? 
            //<Messenger message={'loader'} /> :
            //console.log("prop.header", props.header)
            // <Container 
            // className={'ni-layout-home'}
            // >
            <Flex 
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home'} 
                direction={Flex.directions.COLUMN} 
                gap={Flex.gaps.NONE} >
                <Container fluid
                >
                <Row >   
                    <HeaderMenu refProps={viewRef.menu} scrollCallBack={scrollCallBack} content={props.header} />
                    <HomeIntro content={props.home} />
                    <HomeApproach_title content={props.home} />
                    <HomeApproach_cards content={props.home} />
                    <HomeProducts refProps={viewRef.products} scrollCallBack={scrollCallBack} content={props.home} />
                    <FooterMenu refProps={viewRef.footer} scrollCallBack={scrollCallBack} content={props.footer} />
                </Row>
                </Container> 
            </Flex>
    );
}

export default Home;