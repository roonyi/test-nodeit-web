import { Flex, Box } from 'monday-ui-react-core';
import { WebContent } from './content';

export const HeaderMenu = (props) => {
    const MenuBar = (props) => {
        console.log("props.fixed en MenuBar: ",props.fixed)
        return (
            <Flex
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-bar'} 
                direction={Flex.directions.ROW} 
                gap={Flex.gaps.SMALL} >
                <WebContent info={props.fixed?.logo.component?.elements} alterClassHint={'bar'} />
                <Box className={'ni-layout-block-header'} >    
                    <WebContent info={props.fixed?.links.component?.elements} alterClassHint={'bar'} />
                </Box>
                
            </Flex>
        );
    }

    console.log("props.content en HeaderMenu: ",props.content)
    return (
        <MenuBar fixed={props.content} />
    );
}

export default HeaderMenu;
