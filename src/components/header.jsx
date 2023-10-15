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

/*
<WebContent info={props.fixed?.components.logo} alterClassHint={'bar'} />
{props.fixed?.map((blocks) => {
                        return(
                        <Box className={'ni-layout-block'} >
                            
                            <WebContent info={blocks.detail.headerlinks} alterClassHint={'bar'} />
                            </Box>);
                        })
                    }
const MenuBar = (props) => {
    console.log("props.fixed en MenuBar: ",props.fixed)
    //props.fixed?.detail?.map((blocks) => {
        props.fixed?.components?.map((blocks) => {
        //console.log("props.fixed en MenuBar key: ",blocks.id)
        console.log("props.fixed.detail en MenuBar detail: ",blocks.logo)
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
                    return(
                    <Box className={'ni-layout-block'} >
                        <WebContent info={blocks.detail.logo} alterClassHint={'bar'} />
                        <WebContent info={blocks.detail.headerlinks} alterClassHint={'bar'} />
                    </Box>);
                })
            }
        </Flex>
    );
}*/