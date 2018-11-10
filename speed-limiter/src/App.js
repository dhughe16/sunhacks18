import React, { Component } from 'react';
import './App.css';
import Entry from './Entry';
import Bar from './Bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Bar/>
            <p/>
            <Entry/>
        </header>
      </div>
    );
  }
}

export default App;
