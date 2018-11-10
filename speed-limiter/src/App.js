import React, { Component } from 'react';
import './App.css';
import Entry from './Entry';
import Bar from './Bar';
import MapWithControlledZoom from './ReactMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Bar/>
            <Entry/>
            <MapWithControlledZoom/>
        </header>
      </div>
    );
  }
}

export default App;
