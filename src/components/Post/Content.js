import React from 'react';
import { connect } from 'react-redux';

import Loader from '../Loader';
import ActionButton from './ActionButton';

import { createMarkup } from '../../utils/createMarkup';

const Content = ({ post }) => {
  if(!post) {
    return <Loader />
  }
  return (
    <section className="content-area">
      <div className="title"log={console.log(post)}>
        {post.title.rendered}
      </div>
      <div className="content">
        <div dangerouslySetInnerHTML={createMarkup(post.content.rendered)}></div>
        <ActionButton id={post.id} title={post.title.rendered} />
      </div>
    </section>
  )
}

export default connect(({ postReducer }) => ({ post: postReducer }))(Content);
