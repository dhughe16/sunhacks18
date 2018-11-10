/*
* Name: Darcy Hughes
* Sunhacks 2018
 */

import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Entry extends Component {
    constructor() {
        super();
        this.state = {
            location: {latitude:0,
                        longitude:0},
            address:''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
    }

    componentDidMount(){
        axios({
            method: 'get',
            url: '/',
            timeout: 5000 })
            .then(res => {
                const location= res.data;
                this.setState({ location: location });
            })
            .catch(err => {
                console.error('ERROR:', err);
            });

        //this.reverseGeocode();
    }

    reverseGeocode(){
        let latlng = this.location.latitude.toString() + ',' + this.location.longitude.toString();
        let key = 'AIzaSyC4xYqoJ2z76xP1hEu8B4AG9otpRL7mxec';
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlng + '&key=' + key;
        var addr = '';
        axios({
            method: 'get',
            url: url,
            timeout: 5000
        })
            .then(res => {
                //console.log(res.data.results[0].formatted_address);
                addr = res.data.results[0].formatted_address;
                this.setState({ address: addr });
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="start"
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
            </div>
        );
    }
}
export default Entry;