import React, { Component } from 'react';
import './styles/reset.css'
import './styles/App.css';
import Entry from './Entry';
import Bar from './Bar';
import ActionBar from "./ActionBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Bar/>
            <p/>
            <Entry/>
            <p/>
            <ActionBar/>
        </header>
      </div>
    );
  }
}

export default App;
