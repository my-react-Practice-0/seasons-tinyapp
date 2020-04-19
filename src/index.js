import React, { Component } from 'react'
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

export default class App extends Component {

    state = {lat : null, errorMessage : ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat : position.coords.latitude}),
        err => this.setState({errorMessage : err.message})
        );
    }

    render() {    

        if(this.state.errorMessage && !this.state.lat){
            return <div>Error : {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner text='Waiting for location permission'/>
    }
}

ReactDom.render(<App/>,document.querySelector('#root'));