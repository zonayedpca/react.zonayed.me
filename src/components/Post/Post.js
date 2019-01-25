import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import Content from './Content';
import Comment from './Comment';

import { getPost } from '../../actions';

class Post extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const postId = this.props.match.params.id;
    this.props.getPost(postId);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Content />
        <Comment />
      </React.Fragment>
    )
  }
}

export default connect(null, { getPost })(Post);
