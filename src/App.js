import React, { Component } from 'react';

import Home from './components/Home/Home';
import Footer from './components/Footer';

import './App.css';

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
