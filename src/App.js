import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heart from './heart.svg';
import arrowdown from './arrowdown.svg';
import arrownext from './arrownext.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
