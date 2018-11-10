import React, { Component } from 'react';
import './App.css';
import Entry from './Entry';
import Bar from './Bar';
import MapWithControlledZoom from './ReactMap';
import Paper from '@material-ui/core/Paper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Bar/>
            <p/>
            <Entry/>
            <p/>
            <Paper><MapWithControlledZoom/></Paper>
        </header>
      </div>
    );
  }
}

export default App;
