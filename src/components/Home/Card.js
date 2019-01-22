import React from 'react';

import arrownext from '../../assets/arrownext.svg';

import { basicFilter } from '../../utils/textFilter';

export default ({ title: { rendered } }) => (
  <li>
    <h4>{basicFilter(rendered)}</h4>
    <img alt="next" src={arrownext} />
  </li>
)
