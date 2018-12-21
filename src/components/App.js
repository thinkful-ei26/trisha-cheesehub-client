import React, { Component } from 'react';
import './App.css';
import CheeseList from './cheese-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cheesehub</h1>
        <CheeseList />
      </div>
    );
  }
}

export default App;
