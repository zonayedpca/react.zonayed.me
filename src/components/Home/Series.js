import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

import arrowdown from '../../assets/arrowdown.svg';

const Series = ({ basic }) => {
  if(!basic) {
    return <p>Loading...</p>
  }
  return (
    <div className="series basic">
      <div className="section-title">
        <h3>ব্যাসিক</h3>
        <span><img alt="down" src={arrowdown} /></span>
      </div>
      <ul className="list basic-list">
        {basic.map(({id, title}) => (
          <Card key={id} title={title} />
        ))}
      </ul>
    </div>
  )
}

export default connect(( { basicReducer }) => ({ basic: basicReducer }))(Series);
