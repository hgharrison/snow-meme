/*
 Austin Snow Checker
 Hank Harrison
 */

import React, {Component} from 'react';
import {DirectLink} from 'react-scroll'
import './App.css';
import SimpleMap from "./map";
import Weather from "./weather";
import {Button} from 'react-bootstrap';

// OpenWeatherMap API key for access
const Api_Key = "a25453f67de40f4fc9cea2b25c89a172";

class App extends Component {

    constructor(){
        super();
    }

    // State storage
    state = {
        temperature: undefined,     // temperature
        city: undefined,            // city set to Austin
        country: undefined,         // country set to US
        humidity: undefined,        // humidity
        description: undefined,     // weather description for parsing, extract snow
        error: undefined            // error storage for handling
    }

    // Method call for retrieving the weather
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=austin,us&appid=${Api_Key}`);
        const response = await api_call.json();

        console.log(response);

        this.setState({
            temperature: response.main.temp,
            city: response.name,
            country: response.sys.country,
            humidity: response.main.humidity,
            description: response.weather[0].description,
            error: ""
        })

        // Look over this again this is trash
        let ourDescription = [];
        var i = 0;
        for(i; i < this.state.description.length; i++){
            if(i === 0 || this.state.description[i-1] === " "){
                var str = this.state.description[i];

                ourDescription.push(str.toUpperCase());
                console.log(this.state.description);

            }
            else{
                ourDescription.push(this.state.description[i]);
            }
        }
    }


    // Fetch API data upon loading component
    componentWillMount(){
        var loadweather = this.getWeather();   // load the weather the lazy way
        this.forceUpdate();
    }

    render(){
        return(
            <div>
                <div>
            <SimpleMap/>
            </div>
                <div>
            <Weather
                description={this.state.description}
            />
                </div>

            </div>

    )
    }
}

export default App;



