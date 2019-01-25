import React from 'react';
import { connect } from 'react-redux';

import FavCard from './FavCard';
import SearchCard from './SearchCard';

const SearchFavArea = ({ searchVisibility, search, favorite }) => (
  <section className="search-fav-area">
    <ul>
      {searchVisibility ? (search && (search.length <= 0 ?
        <div class="no-result"><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/zonayedpca/react.zonayed.me" className="btn-suggest">নতুন টপিক সাজেস্ট করুন</a></div>
         : (search.map(({ id, title }) => <SearchCard key={id} id={id} title={title} />)))) : (favorite.length > 0 ? (favorite.map(({id, title}) => <FavCard key={id} id={id} title={title} />)) : 'Nothing')}
    </ul>
  </section>
)

export default connect(({ searchVisibilityReducer, favoriteReducer, searchReducer }) => ({ searchVisibility: searchVisibilityReducer, favorite: favoriteReducer, search: searchReducer }))(SearchFavArea);
