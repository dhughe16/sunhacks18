import React, { Component } from 'react';
import './App.css';
import Entry from './Entry';
import Bar from './Bar';
import Speedometer from './Speedometer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Bar/>
            <Entry/>
        </header>
      </div>
    );
  }
}

export default App;
