import React, {Component} from 'react';

class DateTime extends Component{
    constructor(){
    super();
    this.state ={
        currentTime: new Date().toLocaleDateString()
        }
    }

    componentDidMount(){
        setInterval( () => {
            this.setState({
              currentTime : new Date().toLocaleString()
            })
          },1000)
    }

    render(){
        return(
            <div className='dateTime'>
                <p>Currently, it is: {this.state.currentTime}</p>
            </div>
        )
    }
};

export default DateTime;