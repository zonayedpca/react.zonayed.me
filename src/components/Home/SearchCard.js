import React from 'react';
import { Link } from 'react-router-dom';

import { basicFilter } from '../../utils/textFilter';

import search from '../../assets/search.svg';

export default ({ id, title }) => (
  <li>
    <h4><Link to={`/post/${id}`}>{basicFilter(title.rendered)}</Link></h4>
    <img alt="খোঁজা" src={search} />
  </li>
)
