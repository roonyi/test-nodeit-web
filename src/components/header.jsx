import { Flex, Box } from 'monday-ui-react-core';
import { WebContent } from './content';

export const HeaderMenu = (props) => {
    const MenuBar = (props) => {
        console.log("props.fixed en MenuBar: ",props.fixed)
        props.fixed?.map((blocks) => {
            //console.log("props.fixed en MenuBar key: ",blocks.id)
            console.log("props.fixed.detail en MenuBar detail: ",blocks.detail)
        }) 
        return (
            <Flex
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-bar'} 
                direction={Flex.directions.ROW} 
                gap={Flex.gaps.SMALL} >
                {
/*                     props.fixed?.map((blocks) => {
                        return <MenuBlock key={blocks.id} detail={blocks.detail} />
                    }) */
                    props.fixed?.map((blocks) => {
                        return(
                        <Box className={'ni-layout-block'} key={blocks.detail.id}>
                            <WebContent info={blocks.logo} alterClassHint={'bar'} />
                            <WebContent info={blocks.headerlinks} alterClassHint={'bar'} />
                            {/* <WebContent info={blocks.detail.headerlinks} alterClassHint={'bar'} />
                             <WebContent info={blocks.logo} alterClassHint={'bar'} /> */}
                        </Box>);
                    })
                }
            </Flex>
        );
    }

    const MenuBlock = (props) => {
        console.log("props.detail en MenuBlock: ", props.detail)
        return (
            <Box className={'ni-layout-block'} >
                <WebContent info={props.detail} alterClassHint={'bar'} />
            </Box>
        );
    }
    console.log("props.content en HeaderMenu: ",props.content)
    return (
        <MenuBar fixed={props.content} />
    );
}

export default HeaderMenu;