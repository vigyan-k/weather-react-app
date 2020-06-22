import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faSnowflake, faCloudRain, faMoon} from '@fortawesome/free-solid-svg-icons';

const IconsRow = () => {
    return (
        <div className='iconContainer'>
            <FontAwesomeIcon icon={faSun} className='sunny weatherIcons'/>
            <FontAwesomeIcon icon={faCloudRain} className='cloudy weatherIcons'/>
            <FontAwesomeIcon icon={faSnowflake} className='rainy weatherIcons'/>
            <FontAwesomeIcon icon={faMoon} className='moony weatherIcons'/>
        </div>
    )
}

export default IconsRow;