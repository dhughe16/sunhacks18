/*
* Name: Darcy Hughes
* Sunhacks 2018
 */

import React, { Component } from "react";


class Map extends Component {
    constructor() {
        super();
    }


    componentDidMount() {

    }

    initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }


    render() {
        return (
            <div id>

            </div>
        );
    }
}
export default Map;