import React from 'react';
import { connect } from 'react-redux';

import { setReadPost, unsetReadPost, unsetFavoritePost ,setFavoritePost } from '../../actions';

import heart from '../../assets/heart.svg';
import reading from '../../assets/reading.svg';

const ActionButton = ({ id, title, favorite, read, setReadPost, unsetReadPost, setFavoritePost, unsetFavoritePost }) => (
  <section className="action-button-area">
    {read.some(one => one === id) ? <div className="read on-read" onClick={() => unsetReadPost(id)}>
      <img alt="read?" src={reading} />
      <span>পড়া হয়নি</span>
    </div> : <div className="read" onClick={() => setReadPost(id)}>
      <img alt="read?" src={reading} />
      <span>পড়া হয়ে গেছে</span>
    </div>}
    {favorite.some(one => id === one.id) ? <div className="favorite on-favorite" onClick={() => unsetFavoritePost(id)}>
      <img className="in-fav" alt="favorite" src={heart} />
      <span>সরিয়ে ফেলুন</span>
    </div> : <div className="favorite" onClick={() => setFavoritePost({id, title})}>
      <img className="in-fav" alt="favorite" src={heart} />
      <span>ভালো লেগেছে</span>
    </div>}
  </section>
)

export default connect(({readReducer, favoriteReducer}) => ({ read: readReducer, favorite: favoriteReducer }), { setReadPost, unsetReadPost, setFavoritePost, unsetFavoritePost })(ActionButton);
