import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

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

  onButtonChange=()=>{
    fetch('http://localhost:3000/parent')
    .then(res=>res.json())
    .then(data=>this.setState(data))
    .catch(err=>console.log(err))
  }

  render() {
    return (
      <div>
      <button onClick={this.onButtonChange}>Get Current Location</button>
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
