import React from "react";
import { connect } from "react-redux";

import Loader from "../Loader";
import ActionButton from "./ActionButton";

import { createMarkup } from "../../utils/createMarkup";

const Content = ({ post }) => {
  if (!post) {
    return <Loader />;
  }
  return (
    <section className="content-area">
      <div className="title">{post.title}</div>
      <div className="content">
        <div dangerouslySetInnerHTML={createMarkup(post.content)}></div>
        <ActionButton id={post.contentDir} title={post.title} />
      </div>
    </section>
  );
};

export default connect(({ postReducer }) => ({ post: postReducer }))(Content);
