/*
* Name: Darcy Hughes
* Sunhacks 2018
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Entry extends Component {
    constructor() {
        super();
    }


    componentDidMount() {

    }

    render() {
        return (
            <div>
                <form>
                    <TextField
                        id="standard-name"
                        label="Start"
                        margin="normal"/>
                    <p/>
                    <TextField
                        id="standard-name"
                        label="Destination"
                        margin="normal"/>
                    <p/>
                    <Button variant="contained" color="primary">Go</Button>
                </form>
            </div>
        );
    }
}
export default Entry;