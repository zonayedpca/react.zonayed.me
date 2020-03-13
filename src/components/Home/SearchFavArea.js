import React from "react";
import { connect } from "react-redux";

import FavCard from "./FavCard";
import SearchCard from "./SearchCard";

const SearchFavArea = ({ searchVisibility, search, favorite }) => (
  <section className="search-fav-area">
    <div className="area">
      <ul>
        {searchVisibility ? (
          search &&
          (search.length <= 0 ? (
            <div className="no-result">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/zonayedpca/react.zonayed.me"
                className="btn-suggest"
              >
                নতুন টপিক সাজেস্ট করুন
              </a>
            </div>
          ) : (
            search.map(({ title, contentDir }) => (
              <SearchCard key={title} title={title} contentDir={contentDir} />
            ))
          ))
        ) : favorite.length > 0 ? (
          favorite.map(({ title, id }) => (
            <FavCard key={title} title={title} contentDir={id} />
          ))
        ) : (
          <p className="no-fav-post">
            আপনি চাইলে এখানে আপনার প্রিয় পোস্ট যুক্ত করতে পারবেন, অথবা কোনো টপিক
            খুঁজতে পারেন
          </p>
        )}
      </ul>
    </div>
  </section>
);

export default connect(
  ({ searchVisibilityReducer, favoriteReducer, searchReducer }) => ({
    searchVisibility: searchVisibilityReducer,
    favorite: favoriteReducer,
    search: searchReducer
  })
)(SearchFavArea);
