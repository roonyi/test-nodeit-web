import { Flex, Box, Clickable, Modal, ModalHeader, ModalFooter, Button } from 'monday-ui-react-core';
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom'
//import { Link as RouteLink } from "react-router-dom";
import { HeaderMenu } from "./header"; 
import { FooterMenu } from "./footer"; 
//import Messenger from './messenger'; // for loading porpuses
import WebContent from './content';
import { Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
// import Carousel from 'react-bootstrap/Carousel';

export const Pricing = (props) => {
    console.log("props.header", props.header)
    
    const viewRef = {
        menu: useRef(),
        footer: useRef(),
        // products: useRef()
    };

    const scrollCallBack = (view) => {
        viewRef[view]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // const location = useLocation();
    // const  from  = location.state;
    // useEffect(() => { 
    //     if (from !== null ) {
    //         console.log('viewRef[view]: ',viewRef[from])
    //         scrollCallBack('products');
    //     }
    //   },[from]);
    
   
    // console.log('from_scroll_use: ', from);
    
    // Constant for the Carousels
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
      };

    const Pricing_title = (props) => {
        return (
            <Flex 
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-pricing-title'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <Container fluid>
                    <Col>
                        <WebContent info={props.content?.pricing_title.component?.elements} contentClassName={'ni-layout-home-approach-title-text'}/>
                    </Col>
                </Container>    
            </Flex>
        );
    };

    const PricingCard = (props) => {
        // let intro = [props.detail[0],props.detail[1]];
        // console.log('card',intro);
        console.log('props.content_ron', props)
        return (
            <Clickable 
                className={'ni-layout-clickable'}
                onClick={() => props.callbackShow(props.detail)} >
                <Box 
                    key={props.id}
                    className={'ni-layout-solutions-card'}
                    border={Box.borders.NONE} 
                    rounded={Box.roundeds.MEDIUM}
                    shadow={Box.shadows.SMALL}
                    padding={Box.paddings.MEDIUM} >
                    <Flex 
                        justify={Flex.justify.SPACE_BETWEEN} 
                        align={Flex.align.CENTER} 
                        className={'ni-full-container'} 
                        direction={Flex.directions.COLUMN} 
                        gap={Flex.gaps.SMALL} >
                        <WebContent info={props.detail} />
                        {/* <WebContent info={intro} /> */}
                    </Flex>
                </Box>
            </Clickable>
        );
    }

    const PricingGrid = (props) => {
        return (
            <Flex 
                justify={Flex.justify.CENTER} 
                align={Flex.justify.STRETCH} 
                className={'ni-layout-pricing-main'}
                // className={'ni-layout-home-approach'} 
                direction={Flex.directions.ROW} 
                gap={Flex.gaps.LARGE} 
                wrap={true} >
                {
                    // props.list?.map((card) => {
                    // return <SolutionsCard key={card.id} detail={card.detail} callbackShow={props.callbackShow} /> 
                    
                    (props.content !== undefined) &&
                    Object.values(props?.content).map((value, index) => {                        
                    if (value.title !== 'Pricing_title') {
                        return <PricingCard key={index} detail={value.component?.elements} />
                    }
                    })
                }
            </Flex>
        );
    }
    
      return (
        //(props.home === undefined) ? 
            //<Messenger message={'loader'} /> :
            //console.log("prop.header", props.header)
            // <Container 
            // className={'ni-layout-home'}
            // > nodeit v2
            <Flex 
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-general'} 
                direction={Flex.directions.COLUMN} 
                gap={Flex.gaps.SMALL} >
                <Container fluid
                >
                <Row >   
                    <HeaderMenu refProps={viewRef.menu} scrollCallBack={scrollCallBack} content={props.header} />
                    <Pricing_title content={props.pricing} />
                    <PricingGrid content={props.pricing} />
                    <FooterMenu refProps={viewRef.footer} scrollCallBack={scrollCallBack} content={props.footer} />
                </Row>
                </Container> 
            </Flex>
    );
}

export default Pricing;