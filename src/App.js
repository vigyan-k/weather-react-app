import React, {Component} from 'react';
import axios from 'axios';
import Weather from './components/Weather.js';
import IconsRow from './components/Icons.js';
import DateTime from './components/DateTime.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const api = {
  base: 'http://api.openweathermap.org/data/2.5/weather?',
  key: '9337001bff95870d0f26deeb07c4be6f',
  units: 'metric',
  city: 'New York',
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      detailArray: [],
      cityName: '',
      isLoading: true
    }
  }

  // Put the axios request in the componentDidMount 
  componentDidMount () {
    axios({
      url: api.base,
      method: 'GET',
      responseType:'JSON',
      params: {
        q:api.city,
        appid: api.key,
        units: api.units
      }, 
    }).then((response) => {
      let detailArray = [];
      detailArray.push(response.data);
      this.setState({
        detailArray,
        isLoading: false
      })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('this has been submitted')
  }

  handleChange = (event) => {
    this.setState({cityName: event.target.value})
    console.log(this.state.cityName);
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('click me')
  }

  render(){
    return (
      <div className='main'>
        <div className="wrapper">
          <div className='searchContainer'>
            <h1>Weather <span>Radar</span>  <FontAwesomeIcon icon={faSearchLocation} className='searchIcon'/></h1>
            <IconsRow />
            <form action="" onSubmit={this.handleSubmit}>
              <input value={this.state.value} onChange={this.handleChange}type="text" placeholder='City' />
            </form>
            <button onClick={this.handleClick}>Get the Weather!</button>
          </div>
          <div className='colorBox'>
          {
            this.state.isLoading ? <p>Loading...</p> :
            this.state.detailArray.map( (item, index) => { // this.state.detail is not being recognized as an array
            return (
              <Weather
              index = {item.id}
              key = {item.id}
              cityName = {item.name}
              country = {item.sys.country}
              currentTemp = {item.main.temp}
              feelsLike = {item.main.feels_like}
              minTemp = {item.main.temp_min}
              maxTemp = {item.main.temp_max}
              weatherDescription = {item.weather[0].description}
              />
            )
          })
          }
          <DateTime />
          </div>
        </div>
        <div className='copyright'>
        <p>Copyright Vigyan Kayastha 2020</p>
        </div>
      </div>
    );
  }
}

export default App;
