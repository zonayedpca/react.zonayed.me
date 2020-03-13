import React from "react";
import { Link } from "react-router-dom";

import arrownext from "../../assets/arrownext.svg";

import { basicFilter } from "../../utils/textFilter";

export default ({ id, type, title, tags, contentDir }) => (
  <li>
    <h4>
      <Link
        to={{
          pathname: `/${type}/${id}`,
          state: {
            contentDir
          }
        }}
      >
        {basicFilter(title)}
      </Link>
    </h4>
    <img alt="next" src={arrownext} />
  </li>
);
