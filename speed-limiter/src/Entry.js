/*
* Name: Darcy Hughes
* Sunhacks 2018
 */

import React, { Component } from "react";
import './styles/entry.css';
import GoogleMap from './Map';
import Marker from './Map';

class Entry extends Component {
    constructor() {
        super();
        this.state = {
            latitude:33.4169217,
            longitude:-111.9450617,
            startInput: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
    }


    render() {
        return (
            <div>
                <GoogleMap
                    defaultCenter={{ lat: this.state.longitude, lng: this.state.latitude}}
                    zoom={3}
                >
                    <Marker
                        position={{ lat:this.state.longitude, lng: this.state.latitude}}
                    >
                    </Marker>
                </GoogleMap>
                <p/>
                <h5>
                    Enter desired destination below
                </h5>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="end"
                        label="Destination"
                        margin="normal"/>
                    <p/>
                    <button type="submit" variant="contained" color="primary" onClick={()=>{this.handleClick()}}>Go</button>
                </form>
            </div>
        );
    }
}
export default Entry;