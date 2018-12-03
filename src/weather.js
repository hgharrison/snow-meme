import React from 'react';
import {SocialIcon} from "react-social-icons";

const Weather = (props) => {
    return(
        <header className="App-header">
            <h1 className="App-title">{props.description &&<p>The current weather in Austin is:  {props.description}</p>}</h1>
            <h1 className="Sub-header">Follow our live tracker for updates - <SocialIcon
                url="http://instagram.com/hankharrison"/>
            </h1>

        </header>
    )
}
export default Weather;