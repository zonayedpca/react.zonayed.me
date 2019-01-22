import React from 'react';
import { connect } from 'react-redux';

import FavCard from './FavCard';
import SearchCard from './SearchCard';

const SearchFavArea = ({ searchVisibility, search }) => (
  <section className="search-fav-area">
    <ul>
      {searchVisibility ? (search && (search.length <= 0 ? <p>নতুন টপিক সাজেস্ট করুন</p> : (search.map(({ id, title }) => <SearchCard key={id} title={title} />)))) : (<FavCard />)}
    </ul>
  </section>
)

export default connect(({ searchVisibilityReducer, searchReducer }) => ({ searchVisibility: searchVisibilityReducer, search: searchReducer }))(SearchFavArea);
