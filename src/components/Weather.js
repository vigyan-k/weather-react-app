import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSun, faCloud, faSmog } from '@fortawesome/free-solid-svg-icons';

const Weather = ({cityName, country, currentTemp, feelsLike, minTemp, maxTemp, weatherDescription, icon, main}) => {
    // const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
    let weatherIcon = undefined;

    if (main === 'Clear') {
        weatherIcon = <FontAwesomeIcon icon={faSun} />;
    }  else if (main === 'Clouds') {
        weatherIcon = <FontAwesomeIcon icon={faCloud} />;
    } else if (main === 'Rain') {
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    }   else if (main === 'Drizzle') {
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (main === 'Snow') {
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (main === 'Thunderstorm') {
        weatherIcon = <FontAwesomeIcon icon={faBolt} />;
    } else {
        weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }
    
    return (
        <div className='modal' id='modal'>
            <div className='row1'>
                <div className='square squareOne'>
                    <p>{cityName}, {country}</p>
                </div>
                <div className='square squareTwo'>
                    <p>{currentTemp}{'\u00b0'}</p>
                    <p>Feels like {feelsLike}{'\u00b0'}</p>
                </div>
            </div>

            <div className="row2">
                <div className='square squareThree'>
                    <p className='weatherIcon'>{weatherIcon}</p>
                    <p className='desc'>{weatherDescription}</p>
                </div>
                <div className='square squareFour'>
                    <p><FontAwesomeIcon icon={faChevronDown}className='chevron'/>{minTemp}{'\u00b0'}</p>
                    <p><FontAwesomeIcon icon={faChevronUp} className='chevron'/> {maxTemp}{'\u00b0'}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;