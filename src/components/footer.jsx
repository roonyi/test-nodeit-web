import { Flex, Box } from 'monday-ui-react-core';
import { WebContent } from './content';

export const FooterMenu = (props) => {
    const MenuBar = (props) => {
        console.log("props.fixed en MenuBar_footer: ",props.fixed)
        return (
            <Flex
                justify={Flex.justify.CENTER} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-bar-footer'} 
                direction={Flex.directions.ROW} 
                //gap={Flex.gaps.SMALL} 
                >
                <Flex direction={Flex.directions.COLUMN}
                      align={Flex.justify.CENTER} >
                    <WebContent info={props.fixed?.logo.component?.elements} alterClassHint={'bar'} />
                    <WebContent info={props.fixed?.copyright.component?.elements} alterClassHint={'bar'} />
                </Flex>
                <Flex direction={Flex.directions.COLUMN} >
                    <WebContent info={props.fixed?.links_vertical_block_left.component?.elements} contentClassName={'ni-layout-text-footer'} />
                </Flex>
                <Flex direction={Flex.directions.COLUMN} > 
                    <WebContent info={props.fixed?.links_vertical_block_right.component?.elements} contentClassName={'ni-layout-text-footer'} />
                </Flex>
            </Flex>
        );
    }

    console.log("props.content en HeaderMenu: ",props.content)
    return (
        <MenuBar fixed={props.content} />
    );
}

export default FooterMenu;