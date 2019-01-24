import React from 'react';

import heart from '../../assets/heart.svg';
import reading from '../../assets/reading.svg';

export default() => (
  <section className="action-button-area">
    <div className="read">
      <img className="read not-read" alt="read?" src={reading} />
    </div>
    <div className="favorite">
      <img className="in-fav not-in-fav" alt="favorite" src={heart} />
    </div>
  </section>
)
