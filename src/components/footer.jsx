import { Flex, Box } from 'monday-ui-react-core';
import { WebContent } from './content';
import { Container, Row, Col } from 'react-bootstrap';

export const FooterMenu = (props) => {
    const MenuBar = (props) => {
        console.log("props.fixed en MenuBar_footer: ",props)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-bar-footer'} 
                direction={Flex.directions.ROW} 
                >
                <Container fluid>
                    <Row>
                        <Col xs={9} lg={5} md={5}>                        
                                <Flex 
                                    className={'ni-layout-bar-footer-logo'}    
                                    direction={Flex.directions.COLUMN} 
                                    >
                                    <WebContent info={props.fixed?.logo.component?.elements} alterClassHint={'bar'} {...props}/>
                                </Flex>    
                        </Col>
                        <Col xs={6} lg={2} md={2}>
                            <Flex 
                                // className={'ni-layout-bar-footer'} 
                                direction={Flex.directions.COLUMN} 
                                >
                                <WebContent info={props.fixed?.links_vertical_block_left.component?.elements} contentClassName={'ni-layout-text-footer'} /> 
                                </Flex>
                        </Col>
                        <Col xs={6} lg={2} md={2}>
                            <Flex 
                                // className={'ni-layout-bar-footer'} 
                                direction={Flex.directions.COLUMN} 
                                >
                                <WebContent info={props.fixed?.links_vertical_block_right.component?.elements} contentClassName={'ni-layout-text-footer'} />
                            </Flex>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8} lg={5} md={5}>
                            <Flex 
                                className={'ni-layout-bar-footer-text-cr_sn'}    
                                direction={Flex.directions.COLUMN} 
                                >
                                <WebContent info={props.fixed?.copyright.component?.elements} alterClassHint={'bar'} />
                            </Flex>
                        </Col>
                        <Col xs={8} lg={7} md={7}>    
                            <Flex 
                                className={'ni-layout-bar-footer-text-cr_sn'}  
                                direction={Flex.directions.ROW} 
                                >
                                <WebContent info={props.fixed?.social_networks.component?.elements} alterClassHint={'bar-footer'} />
                            </Flex>
                        </Col>
                    </Row>
                </Container>
            </Flex>
        );
    }

    console.log("props.content en HeaderMenu: ",props.content, props)
    return (
        <MenuBar fixed={props.content} {...props}/>
    );
}

export default FooterMenu;