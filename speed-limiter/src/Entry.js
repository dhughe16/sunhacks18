/*
* Name: Darcy Hughes
* Sunhacks 2018
 */

import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import axios from 'axios';
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

    componentDidMount(){
        /*axios({
            method: 'get',
            url: '/parent',
            timeout: 5000 })
            .then(res => {

                console.log(res);
                this.reverseGeocode();

            })
            .catch(err => {
                console.error('ERROR:', err);
            });*/
        let loc = {
            longitude:this.state.longitude,
            latitude:this.state.latitude
        };

        let latlng = loc.latitude.toString() + ',' + loc.longitude.toString();
        let key = 'AIzaSyC4xYqoJ2z76xP1hEu8B4AG9otpRL7mxec';
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlng + '&key=' + key;
        axios({
            method: 'get',
            url: url,
            timeout: 5000
        })
            .then(res => {
                console.log(res.data.results[0].formatted_address);
                let addr = res.data.results[0].formatted_address;
                this.setState({ startInput: addr });
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }


    render() {
        return (
            <Paper>
                <Typography component="h2" variant="h5" gutterBottom>
                    Enter desired destination below
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="startInput"
                        value={this.state.startInput}
                        label="Start"
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}/>
                    <p/>
                    <TextField
                        id="end"
                        label="Destination"
                        margin="normal"/>
                    <p/>
                    <Button type="submit" variant="contained" color="primary" onClick={()=>{this.handleClick()}}>Go</Button>
                </form>
                <Button onClick={this.onButtonChange}>Get current location</Button>
                <GoogleMap
                    defaultCenter={{ lat: this.state.longitude, lng: this.state.latitude}}
                    zoom={3}
                >
                    <Marker
                        position={{ lat:this.state.longitude, lng: this.state.latitude}}
                    >
                    </Marker>
                </GoogleMap>
            </Paper>
        );
    }
}
export default Entry;