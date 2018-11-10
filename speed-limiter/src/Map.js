import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import Button from '@material-ui/core/Button'

export class MapContainer extends React.Component {

  constructor()
  {
    super();
    this.state={
      lat:0,
      long:0,
      endlat:0,
      endlong:0
    }
  }

  /*    componentDidMount(){
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
    }*/

  onButtonChange=()=>{
    fetch('http://localhost:3000/parent')
    .then(res=>res.json())
    .then(data=>this.setState(data))
    .catch(err=>console.log(err))
  }

  render() {
    return (
      <div>
      <Button variant="contained" color="primary" onClick={this.onButtonChange}>Get Current Location</Button>
      <Map google={this.props.google} initialCenter={{lat:0,lng:0}} center={{lat:this.state.lat,lng:this.state.long}}zoom={14}>

        <Marker onClick={this.onMarkerClick}
                position={{lat:this.state.lat,lng:this.state.long}}name={'Current location'} />

      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyApsiMJBsI6piScQHEWkYOEbUU211S2M30'
})(MapContainer)
