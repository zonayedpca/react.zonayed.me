import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBasicPosts } from '../../actions';

import Series from './Series';

class SeriesArea extends Component {
  componentDidMount() {
    const { getBasicPosts } = this.props;
    getBasicPosts();
  }

  render() {
    return (
      <section className="series-area">
        <div className="area">
          <Series />
        </div>
      </section>
    )
  }
}

export default connect(null, { getBasicPosts })(SeriesArea);
