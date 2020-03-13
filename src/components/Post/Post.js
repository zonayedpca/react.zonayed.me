import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import Content from "./Content";
import Comment from "./Comment";

import { getPost } from "../../actions";

class Post extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { contentDir } = this.props.location.state;
    this.props.getPost(contentDir);
  }

  setTitle = () => {
    if (this.props.post) {
      document.title = `${this.props.post.title} - রিঅ্যাক্ট জেএস শিখুন`;
    }
  };

  render() {
    this.setTitle();
    return (
      <React.Fragment>
        <Navbar />
        <Content />
        <Comment />
      </React.Fragment>
    );
  }
}

export default connect(({ postReducer }) => ({ post: postReducer }), {
  getPost
})(Post);
