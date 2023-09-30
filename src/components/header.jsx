import { Flex, Box } from 'monday-ui-react-core';
import { WebContent } from './content';

export const HeaderMenu = (props) => {
    const MenuBar = (props) => {
        return (
            <Flex
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-bar'} 
                direction={Flex.directions.ROW} 
                gap={Flex.gaps.SMALL} >
                {
                    props.fixed?.map((blocks) => {
                        return <MenuBlock key={blocks.id} detail={blocks.detail?.block} />
                    })
                }
            </Flex>
        );
    }

    const MenuBlock = (props) => {
        return (
            <Box className={'ni-layout-block'} >
                <WebContent info={props.detail} alterClassHint={'bar'} />
            </Box>
        );
    }

    return (
        <MenuBar fixed={props.content?.fixed} />
    );
}

export default HeaderMenu;