import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchVisibility, getSearchResult } from '../../actions';

class Search extends Component {
  state = {
    term: ''
  }

  handleChange = ({ target: { value: term } }) => {
    const { basic, searchVisibility, getSearchResult } = this.props;
    this.setState({ term });
    getSearchResult(basic, this.state.term);
    searchVisibility(term.length)
  }

  render() {
    const { term } = this.state;

    return (
      <div className="search-area">
        <input value={term} onChange={this.handleChange} placeholder="কি খুঁজতে চাচ্ছেন?" />
        <span>বাংলায় সার্চ করুন</span>
      </div>
    )
  }
}

export default connect(({ basicReducer }) => ({ basic: basicReducer }), { searchVisibility, getSearchResult })(Search);
