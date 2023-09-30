import { Flex, Box } from 'monday-ui-react-core';
import { WebContent } from './content';

export const HeaderMenu = (props) => {
    const MenuBar = (props) => {
        console.log("props.fixed en MenuBar: ",props.fixed)
        props.fixed?.map((blocks) => {
            console.log("props.fixed en MenuBar key: ",blocks.id)
            console.log("props.fixed en MenuBar detail: ",blocks.detail[0])
            //return <MenuBlock key={blocks.id} detail={blocks.detail?.block} />
        })
        return (
            <Flex
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-bar'} 
                direction={Flex.directions.ROW} 
                gap={Flex.gaps.SMALL} >
                {
                    props.fixed?.map((blocks) => {
                        //return <MenuBlock key={blocks.id} detail={blocks.detail?.block} />
                        return <MenuBlock key={blocks.id} detail={blocks.detail[1]} />
                    })
                }
            </Flex>
        );
    }

    const MenuBlock = (props) => {
        console.log("props.detail en MenuBlock: ",props.detail)
        return (
            <Box className={'ni-layout-block'} >
                <WebContent info={props.detail} alterClassHint={'bar'} />
            </Box>
        );
    }
    console.log("props.content en HeaderMenu: ",props.content)
    return (
        //<MenuBar fixed={props.content?.fixed} /> 
        <MenuBar fixed={props.content} />
    );
}

export default HeaderMenu;