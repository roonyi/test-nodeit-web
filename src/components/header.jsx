import { Flex, Box } from 'monday-ui-react-core';
import { WebContent } from './content';
import { Container, Row, Col } from 'react-bootstrap';

export const HeaderMenu = (props) => {
    const MenuBar = (props) => {
        console.log("props.fixed en MenuBar: ",props.fixed)
        return (
            <section ref={props.refProps} className={'ni-layout-bar'}>
                <Flex 
                    justify={Flex.justify.SPACE_BETWEEN} 
                    align={Flex.justify.CENTER} 
                    className={'ni-layout-bar'} 
                    direction={Flex.directions.ROW} 
                    gap={Flex.gaps.SMALL} >
                    <Container fluid>
                        <Row >
                            <Col  sm="2">
                                <WebContent info={props.fixed?.logo.component?.elements} alterClassHint={'bar'} className={'ni-layout-bar-header-logo'}/>
                            </Col>
                            <Col className={'ni-layout-bar-header-link'} >
                                <WebContent info={props.fixed?.links.component?.elements} alterClassHint={'bar'} />
                            </Col>
                        </Row>
                    </Container>
                </Flex>
            </section>
        );
    }

    console.log("props.content en HeaderMenu: ",props.content)
    return (
        <MenuBar fixed={props.content} {...props} />
    );
}

export default HeaderMenu;
