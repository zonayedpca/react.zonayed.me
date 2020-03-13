import React from "react";
import { Link } from "react-router-dom";

import { basicFilter } from "../../utils/textFilter";

import search from "../../assets/search.svg";

export default ({ title, contentDir }) => (
  <li>
    <h4>
      <Link
        to={{
          pathname: `/react/${basicFilter(title)}`,
          state: {
            contentDir: `react/${contentDir}`
          }
        }}
      >
        {basicFilter(title)}
      </Link>
    </h4>
    <img alt="খোঁজা" src={search} />
  </li>
);
