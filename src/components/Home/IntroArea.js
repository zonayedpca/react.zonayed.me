import React from 'react';

import Navbar from './Navbar';
import Search from './Search';

export default () => (
  <section className="intro-area">
    <Navbar />
    <div className="intro">
      <h2>রিঅ্যাক্ট জেএস শিখুন</h2>
      <p>সম্পূর্ন বাংলায় জুনায়েদ আহমেদ এর সাথে</p>
      <Search />
    </div>
  </section>
)
