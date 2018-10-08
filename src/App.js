/*
 Snow Checker Meme Web App
 Hank Harrison
 */

import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { SocialIcon } from 'react-social-icons';
import './App.css';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class SimpleMap extends Component {


    // Page scrolling constructor
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }

    // Scroll to top
    scrollToTop() {
        scroll.scrollToTop();
    }

    static defaultProps = {
        center: {
            lat: 30.27,
            lng: -97.74
        },
        zoom: 12
    };

    render() {
        return (

            <div style={{position: 'absolute', height: '100%', bottom: '150px', width: '100%'}}>

                <li> <a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a></li>

                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyAMaqWKOB46fenB-taPsaY5O3_WKzWHEjw'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}

                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />

                </GoogleMapReact>

                <header className="App-header">
                    <h1 className="App-title">NO, it will NOT snow in Austin tomorrow.</h1>
                    <h1 className="Sub-header">Follow our live tracker for updates -                     <SocialIcon url="http://instagram.com/hankharrison" />
                    </h1>

                </header>
            </div>
        );
    }
}

export default SimpleMap;

