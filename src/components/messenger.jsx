import { Flex } from 'monday-ui-react-core';
import { Link as RouteLink } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
import { getMedia } from '../helpers/mediaHelper';

export const Messenger = (props) => {
    // const { t, i18n } = useTranslation();

    return (
        <Flex
            className={`ni-messenger-${props.message}`}
            justify={Flex.justify.CENTER} 
            align={Flex.justify.CENTER} 
            direction={Flex.directions.COLUMN} 
            gap={Flex.gaps.NONE} >
            <img src={getMedia(`/src/assets/${props.message}-load.svg`)} />
            <p className={`ni-messenger-text`}>Loading...</p>
            <RouteLink to={'/'} >
                <div><img className={`ni-messenger-logo`} src={'/nodeit_logo.png'} /></div>
            </RouteLink>
        </Flex>
    )
}

export default Messenger;