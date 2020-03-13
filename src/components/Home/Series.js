import React from "react";
import { connect } from "react-redux";

import Loader from "../Loader";
import Card from "./Card";

import arrowdown from "../../assets/arrowdown.svg";
import { basicFilter } from "../../utils/textFilter";

const Series = ({ basic }) => {
  const data = basic && basic.react.reverse();
  if (!data) {
    return <Loader />;
  }
  return (
    <div className="series basic">
      <div className="section-title">
        <h3>ব্যাসিক</h3>
        <span>
          <img alt="down" src={arrowdown} />
        </span>
      </div>
      <ul className="list basic-list">
        {data.map(({ title, tags, contentDir }) => (
          <Card
            key={contentDir}
            id={basicFilter(title)}
            contentDir={`react/${contentDir}`}
            type="basic"
            title={title}
          />
        ))}
      </ul>
    </div>
  );
};

export default connect(({ basicReducer }) => ({ basic: basicReducer }))(Series);
