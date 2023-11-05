import { Flex, Box, Button } from 'monday-ui-react-core';
//import { Link as RouteLink } from "react-router-dom";
import { HeaderMenu } from "./header"; 
import { FooterMenu } from "./footer"; 
//import Messenger from './messenger'; // for loading porpuses
import WebContent from './content';
import { Container, Row, Col } from 'react-bootstrap';

export const Aboutus = (props) => {
    console.log("props.header", props.header)
    
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
                <Container fluid
                    >
                    <Row >    
                        <Col sm="4"
                        className={'ni-layout-wwa-intro-left'}
                        >
                            <Flex
                                gap={Flex.gaps.LARGE}
                                // className={'ni-layout-wwa-intro-left'}
                                direction={Flex.directions.COLUMN}> 
                                <WebContent info={props.content?.who_we_are_left.component?.elements} contentClassName={'ni-layout-home-intro-title-text'}/>                
                            </Flex>
                        </Col>
                        <Col>
                            <Flex
                            className={'ni-layout-wwa-intro-right'} 
                            direction={Flex.directions.COLUMN}
                            gap={Flex.gaps.LARGE} 
                            >
                                <WebContent info={props.content?.who_we_are_right.component?.elements} contentClassName={'ni-layout-home-intro-text'} />
                            </Flex>
                        </Col>
                    </Row>
                </Container>    
            </Flex>
            
        );
    };

    const AboutusApproach_title = (props) => {
        console.log("props.content?.approach_title.component?.elements: ", props.content?.approach_title.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-wwa-approach'} 
                direction={Flex.directions.COLUMN}
                gap={Flex.gaps.SMALL} >
                <Container fluid>
                    <Col>
                        <WebContent info={props.content?.approach_title.component?.elements} contentClassName={'ni-layout-wwa-approach-title-text'}/>
                    </Col>
                </Container>
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
                <Container fluid>
                    <Row
                    align={Flex.justify.CENTER}
                    >
                        {/* <Flex
                            className={'ni-layout-card-approach'} 
                            direction={Flex.directions.ROW}
                            gap={Flex.gaps.SMALL} > */}
                            <WebContent info={props.content?.approach_cards.component?.elements} alterClassHint={'card'}/>
                        {/* </Flex> */}
                    </Row>
                </Container>
            </Flex>
        );
    };

    const AboutusTeam = (props) => {
        console.log("props.content?.team_title.component?.elements: ", props.content?.team_title.component?.elements)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-home-products'} 
                direction={Flex.directions.ROW}
                gap={Flex.gaps.SMALL} >
                <Container fluid>
                    <Row
                    align={Flex.justify.CENTER}>
                    <Col sm="3" lg="3">
                        <Flex
                        className={'ni-layout-home-products'} 
                        direction={Flex.directions.COLUMN}
                        gap={Flex.gaps.SMALL} >
                            <WebContent info={props.content?.team_title.component?.elements} contentClassName={'ni-layout-home-products-title'}/>
                        </Flex>
                    </Col>
                    {/* <Col lg="2">
                        <Flex
                        className={'ni-layout-home-products'} 
                        direction={Flex.directions.ROW}
                        gap={Flex.gaps.SMALL} > */}
                            <WebContent info={props.content?.team.component?.elements} alterClassHint={'card'}/>
                        {/* </Flex>
                    </Col> */}
                    </Row>
                </Container>    
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
                className={'ni-layout-general'} 
                direction={Flex.directions.COLUMN} 
                gap={Flex.gaps.NONE} >
                <Container fluid
                >
                <Row >
                    <HeaderMenu content={props.header} />
                    <AboutusIntro content={props.aboutus} />
                    <AboutusApproach_title content={props.aboutus} />
                    <AboutusApproach_cards content={props.aboutus} />
                    <AboutusTeam content={props.aboutus} />
                    <FooterMenu content={props.footer} />
                </Row>    
                </Container>
            </Flex>
    );
}

export default Aboutus;