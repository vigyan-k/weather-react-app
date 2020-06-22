import React from 'react';


const Weather = ({key, cityName, country, currentTemp, feelsLike, minTemp, maxTemp, weatherDescription}) => {
    return (
        <div index={key} key ={key} className='modal'>
            <div className='row1'>
                <div className='square squareOne'>
                    <p>{cityName}, {country}</p>
                </div>
                <div className='square squareTwo'>
                    <p>Right now, it is {currentTemp}</p>
                    <p>Feels like {feelsLike}</p>
                </div>
            </div>

            <div className="row2">
                <div className='square squareThree'>
                    <p className='desc'>{weatherDescription}</p>
                </div>
                <div className='square squareFour'>
                    <p>Low: {minTemp}</p>
                    <p>High: {maxTemp}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;