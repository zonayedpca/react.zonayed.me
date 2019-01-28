import React from 'react';
import { BarLoader } from 'react-spinners';

export default () => (
  <div className="loader">
    <BarLoader
      sizeUnit={"px"}
      size={150}
      color={'#333'}
    />
  </div>
)
