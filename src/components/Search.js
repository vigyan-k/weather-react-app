import React, { Component } from 'react';
import IconsRow from './Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';

class Search extends Component{
      render(){
        return(
            <div className='searchContainer'>
            <h1>Weather <span>Radar</span>  <FontAwesomeIcon icon={faSearchLocation} className='searchIcon'/></h1>
            <IconsRow />
            <form action="" onSubmit={this.props.handleSubmit}>
              <label htmlFor="search" className='visuallyHidden'></label>
              <input onChange={this.props.handleChange}type="text" placeholder='City' />
            </form>
            <button onClick={this.props.handleClick}>Get the Weather!</button>
          </div>
        )
    }
}

export default Search;