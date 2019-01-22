import React from 'react';

import { basicFilter } from '../../utils/textFilter';

import search from '../../assets/search.svg';

export default ({ title }) => (
  <li>
    <h4>{basicFilter(title.rendered)}</h4>
    <img alt="খোঁজা" src={search} />
  </li>
)
