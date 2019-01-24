import React from 'react';
import { Link } from 'react-router-dom';

import arrownext from '../../assets/arrownext.svg';

import { basicFilter } from '../../utils/textFilter';

export default ({ id, title: { rendered } }) => (
  <li>
    <h4><Link to={`/post/${id}`}>{basicFilter(rendered)}</Link></h4>
    <img alt="next" src={arrownext} />
  </li>
)
