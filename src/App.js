import React, {Component} from 'react';
import axios from 'axios';
import Search from './components/Search.js'
import Weather from './components/Weather.js';
import DateTime from './components/DateTime.js';
import './App.css';

const api = {
  base: 'https://api.openweathermap.org/data/2.5/weather?/',
  key: '9337001bff95870d0f26deeb07c4be6f',
  units: 'metric'
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

  handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: api.base,
      method: 'GET',
      responseType:'JSON',
      params: {
        q:this.state.cityName,
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
    }).catch((error)=>{
      alert('There were no matching cities, please try again')
    })
  }

  handleChange = (event) => {
    this.setState({
      cityName: event.target.value
    })
  }

  handleClick = (event) => { // Grab information from endpoint when button is clicked
    event.preventDefault();
    axios({
      url: api.base,
      method: 'GET',
      responseType:'JSON',
      params: {
        q:this.state.cityName,
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
    }).catch((error)=>{
      alert('There were no matching cities, please try again');
    })
  }

  render(){
    return (
      <div>
      <div className='main'>
        <div className="wrapper">
          <Search handleClick={this.handleClick} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          <div className='colorBox'>
          {this.state.isLoading ?' ' : this.state.detailArray.map( (item, index) => { 
            return (
              <Weather
              key = {index}
              index = {item.weather.id}
              cityName = {item.name}
              country = {item.sys.country}
              currentTemp = {item.main.temp}
              feelsLike = {item.main.feels_like}
              minTemp = {item.main.temp_min}
              maxTemp = {item.main.temp_max}
              weatherDescription = {item.weather[0].description}
              main = {item.weather[0].main}
              windSpeed = {item.wind.speed}
              />
            )
          })
          }
          <DateTime />
          </div>
        </div>
      </div>
      <footer>
          <div className='copyright'>
          <p>Copyright Vigyan Kayastha 2020</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
