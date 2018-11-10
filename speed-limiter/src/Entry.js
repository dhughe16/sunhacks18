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


    render() {
        return (
            <Paper>
                <Typography component="h2" variant="h5" gutterBottom>
                    Enter desired destination below
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="end"
                        label="Destination"
                        margin="normal"/>
                    <p/>
                    <Button type="submit" variant="contained" color="primary" onClick={()=>{this.handleClick()}}>Go</Button>
                </form>
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