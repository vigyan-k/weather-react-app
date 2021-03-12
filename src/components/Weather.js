import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSun, faCloud, faSmog, faWind} from '@fortawesome/free-solid-svg-icons';

const Weather = ({cityName, country, currentTemp, feelsLike, minTemp, maxTemp, weatherDescription, main, windSpeed}) => {

    let weatherIcon = undefined;

    // Change to toggle

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

    let clothing = undefined;

    if (feelsLike < 0) {
        clothing = 'Heavy Jacket';
    }  else if (feelsLike < 10 ) {
        clothing = 'Jacket';
    } else if (feelsLike < 15 ) {
        clothing = 'Jumper';
    }   else if (feelsLike < 20) {
        clothing = 'Light Jacket';
    }  else {
        clothing = 'T-shirt';
    }

    let protection = undefined;

    if (main === 'Rain' | main === 'Drizzle' | main === 'Thunderstorm' ) {
        protection = 'you might need an Umbrella';
    } else {
       protection = "you don't need an umbrella";
    }
    
    return (
        <div className='modal' id='modal'>
            <div className='row1'>
                <div className='square squareOne'>
                    <p>{cityName}, {country}</p>
                </div>
                <div className='square squareTwo'>
                    <p>{currentTemp}{'\u00b0'}C</p>
                    <p>Feels like {feelsLike}{'\u00b0'}C</p>
                </div>
            </div>

            <div className="row2">
                <div className='square squareThree'>
                    <p className='weatherIcon'>{weatherIcon}{weatherDescription}</p>
                    <p> <FontAwesomeIcon icon={faWind}className='weatherIcon'/> Wind: {windSpeed} m/s</p>
                </div>
                <div className='square squareFour'>
                    <p><FontAwesomeIcon icon={faArrowDown}className='weatherIcon chevron'/>{minTemp}{'\u00b0'}C</p>
                    <p><FontAwesomeIcon icon={faArrowUp} className='weatherIcon chevron'/> {maxTemp}{'\u00b0'}C</p>
                </div>
            </div>
            <div className="row3">
                <p> Wear a {clothing} ! </p>
                <p> Primarily {main}, {protection}</p>
            </div>
        </div>
    )
}

export default Weather;