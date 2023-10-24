import { Flex, Box } from 'monday-ui-react-core';
import { WebContent } from './content';

export const FooterMenu = (props) => {
    const MenuBar = (props) => {
        console.log("props.fixed en MenuBar_footer: ",props.fixed)
        return (
            <Flex
                justify={Flex.justify.END} 
                align={Flex.justify.END} 
                className={'ni-layout-bar-footer'} 
                direction={Flex.directions.ROW} 
                >
                <Flex
                    justify={Flex.justify.END} 
                    align={Flex.justify.CENTER} 
                    className={'ni-layout-bar-footer'} 
                    direction={Flex.directions.COLUMN} 
                    gap={Flex.gaps.SMALL} 
                    >
                    <Flex
                        justify={Flex.justify.CENTER} 
                        align={Flex.justify.START} 
                        className={'ni-layout-bar-footer'} 
                        direction={Flex.directions.ROW} 
                        gap={Flex.gaps.SMALL} 
                        >
                        <Flex direction={Flex.directions.COLUMN}
                              justify={Flex.justify.START}
                              >
                            <WebContent info={props.fixed?.logo.component?.elements} alterClassHint={'bar'} />
                        </Flex>
                        <Flex direction={Flex.directions.COLUMN} 
                              >
                            <WebContent info={props.fixed?.links_vertical_block_left.component?.elements} contentClassName={'ni-layout-text-footer'} />
                        </Flex>
                        <Flex direction={Flex.directions.COLUMN} 
                              > 
                            <WebContent info={props.fixed?.links_vertical_block_right.component?.elements} contentClassName={'ni-layout-text-footer'} />
                        </Flex>
                    </Flex>
                    <WebContent info={props.fixed?.copyright.component?.elements} alterClassHint={'bar'}/>
                </Flex>
                <Flex
                direction={Flex.directions.COLUMN} 
                className={'ni-layout-bar-footer-sn'}
                >
                    <Flex
                    direction={Flex.directions.ROW} 
                    className={'ni-layout-bar-footer'}
                    >
                        <WebContent info={props.fixed?.social_networks.component?.elements} alterClassHint={'bar-footer'} />
                    </Flex>
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