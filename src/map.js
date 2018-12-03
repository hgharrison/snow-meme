import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {animateScroll as scroll, Events} from "react-scroll/modules";
import * as ReactDom from "react-dom";

const AnyReactComponent = ({text}) => <div>{text}</div>;

export class SimpleMap extends Component {

    constructor(props){
        super(props);

        this.state = {
            lat: undefined,
            long: undefined
        };

    }

    componentDidMount(){
      //  var getPos = this.getPos();
    }

    getPos = () => {

        navigator.geolocation.getCurrentPosition(position => {

            this.setState({
                lat: position.coords.latitude,
                long: position.coords.longitude
            })

            console.log('Set latitude to: ' + this.state.lat);
            console.log('Set longitude to: ' + this.state.long);

        });
    };


    render() {
        if (!this.props.loaded) {
            return <div>Loading...</div>
        }


        const style = {
            position: 'absolute',
            height: '100%',
            bottom: '150px',
            width: '100%',
        };


        return (

            <div style={style}>
                <Map google={this.props.google} refresh={this.getPos()}
                     center={{
                        lat: this.state.lat,
                        lng: this.state.long
                     }}
                />
            </div>


            );
        }
    }

    export default GoogleApiWrapper({
        apiKey: ('AIzaSyAMaqWKOB46fenB-taPsaY5O3_WKzWHEjw')
})(SimpleMap)

