import { Flex, Box, Clickable, Modal, ModalHeader, ModalFooter, Button } from 'monday-ui-react-core';
import { API } from "monday-ui-react-core/icons";
import {useEffect, useState} from "react";
import { WebGroup, WebContent } from './content';
import { HeaderMenu } from "./header"; 
import { FooterMenu } from "./footer"; 

const SolutionModal = (props) => {
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setRefresh(props.show);
    }, [props.show]);

    const SolutionDetail = (props) => {
        return (
            <Box className={'ni-layout-solutions-modal'} >
                {/* <WebGroup detail={props.solution} contentClassName={'ni-vertical-container'} /> */}
                <WebContent info={props.solution} contentClassName={'ni-vertical-container'} />
            </Box>
        );
    }
    console.log('item:', props.item);
    return (
        (props.item !== undefined) && 
        <Modal 
            width={Modal.width.FULL_WIDTH}
            show={props.show} 
            onClose={props.onClose} 
            alertDialog={true} 
            hideCloseButton={true} >
            <ModalHeader title={props.item[1].content} icon={API} />
            <SolutionDetail solution={props.item} refresh={refresh} />
            <ModalFooter>
                <Flex 
                    justify={Flex.justify.END} 
                    align={Flex.align.CENTER} 
                    className={'ni-vertical-container'} 
                    direction={Flex.directions.ROW} 
                    gap={Flex.gaps.NONE} >
                    <Button className={'ni-modal-footer-button'} onClick={props.onClose}>Close</Button>
                </Flex>
            </ModalFooter>
        </Modal>
    );
}

export const Solutions = (props) => {
    const SolutionsCard = (props) => {
        let intro = [props.detail[0],props.detail[1]];
        console.log('card',intro);
        
        return (
            <Clickable 
                className={'ni-layout-clickable'}
                onClick={() => props.callbackShow(props.detail)} >
                <Box 
                    key={props.id}
                    className={'ni-layout-solutions-card'}
                    border={Box.borders.NONE} 
                    rounded={Box.roundeds.MEDIUM}
                    shadow={Box.shadows.SMALL}
                    padding={Box.paddings.MEDIUM} >
                    <Flex 
                        justify={Flex.justify.SPACE_BETWEEN} 
                        align={Flex.align.CENTER} 
                        className={'ni-full-container'} 
                        direction={Flex.directions.COLUMN} 
                        gap={Flex.gaps.SMALL} >
                        {/* <WebContent info={props.detail.intro} /> */}
                        <WebContent info={intro} />
                    </Flex>
                </Box>
            </Clickable>
        );
    }

    const SolutionsGrid = (props) => {
        console.log('modal',props)
        return (
            <Flex 
                justify={Flex.justify.CENTER} 
                align={Flex.justify.STRETCH} 
                className={'ni-layout-solutions-grid'} 
                direction={Flex.directions.ROW} 
                gap={Flex.gaps.LARGE} 
                wrap={true} >
                {
                    // props.list?.map((card) => {
                    // return <SolutionsCard key={card.id} detail={card.detail} callbackShow={props.callbackShow} /> 
                    (props.list !== undefined) &&
                    Object.values(props?.list).map((value, index) => {                        
                    if (value.title !== 'Summary') {
                        return <SolutionsCard key={index} detail={value.component?.elements} callbackShow={props.callbackShow} />
                    }
                    })
                }
            </Flex>
        );
    }

    const SolutionsInfo = (props) => {
        const [show, setShow] = useState(false);
        const [item, setItem] = useState(undefined);
        
        const handleClose = () => setShow(false);
        const handleShow = (selected) => {
            setItem(selected);
            setShow(true);
        };
        console.log('props grid', props)
        return (
            <Flex
                justify={Flex.justify.START} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-solutions-main'} 
                direction={Flex.directions.COLUMN} 
                gap={Flex.gaps.LARGE} >
                <WebContent info={props.content?.summary.component?.elements} />
                <SolutionsGrid list={props?.content} callbackShow={handleShow} />
                <SolutionModal item={item} show={show} onClose={handleClose} />
            </Flex>
        );
    };

    return (
        // (props.solutions === undefined) ? 
        //     <Messenger message={'loader'} /> :
            <Flex
                justify={Flex.justify.SPACE_BETWEEN} 
                align={Flex.justify.CENTER} 
                className={'ni-layout-solutions'} 
                direction={Flex.directions.COLUMN} 
                gap={Flex.gaps.SMALL} >
                <HeaderMenu content={props.header} />
                <SolutionsInfo content={props.solutions} />
                <FooterMenu content={props.footer} />
            </Flex>
    );
}

export default Solutions;