import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { getReadPost, getFavoritePosts } from './actions';

import Home from './components/Home/Home';
import Post from './components/Post/Post';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFavoritePosts();
    this.props.getReadPost();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/:type/:id" render={(props) => <Post {...props} />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(null, { getReadPost, getFavoritePosts })(App);
