import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heart from './heart.svg';
import arrowdown from './arrowdown.svg';
import arrownext from './arrownext.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="intro-area">
          <div className="brand">
            <img className="logo" alt="রিঅ্যাক্ট বাংলা" src={logo} />
            <span>রিঅ্যাক্ট বাংলা</span>
          </div>
          <div className="intro">
            <h2>রিঅ্যাক্ট জেএস শিখুন</h2>
            <p>সম্পূর্ন বাংলায় জুনায়েদ আহমেদ এর সাথে</p>
            <div className="search-area">
              <input placeholder="কি খুঁজতে চাচ্ছেন?" />
              <span>বাংলায় সার্চ করুন</span>
            </div>
          </div>
        </section>
        <section className="search-fav-area">
          <ul>
            <li>
              <h4>কি, কেন এবং কিভাবে?</h4>
              <img alt="পছন্দ" src={heart} />
            </li>
            <li>
              <h4>প্রোজেক্ট সেটআপ</h4>
              <img alt="পছন্দ" src={heart} />
            </li>
            <li>
              <h4>জেএসএক্স(JSX) পরিচিতি</h4>
              <img alt="পছন্দ" src={heart} />
            </li>
          </ul>
        </section>
        <section className="series-area">
          <div className="series basic">
            <div className="section-title">
              <h3>ব্যাসিক</h3>
              <span><img src={arrowdown} /></span>
            </div>
            <ul className="list basic-list">
              <li>
                <h4>কি, কেন এবং কিভাবে?</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>প্রোজেক্ট সেটআপ</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>জেএসএক্স(JSX) পরিচিতি</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>কি, কেন এবং কিভাবে?</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>প্রোজেক্ট সেটআপ</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>জেএসএক্স(JSX) পরিচিতি</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>কি, কেন এবং কিভাবে?</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>প্রোজেক্ট সেটআপ</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>জেএসএক্স(JSX) পরিচিতি</h4>
                <img src={arrownext} />
              </li>
            </ul>
          </div>
          <div className="series advance">
            <div className="section-title">
              <h3>অ্যাডভান্স</h3>
              <span><img src={arrowdown} /></span>
            </div>
            <ul className="list basic-list">
              <li>
                <h4>কি, কেন এবং কিভাবে?</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>প্রোজেক্ট সেটআপ</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>জেএসএক্স(JSX) পরিচিতি</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>কি, কেন এবং কিভাবে?</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>প্রোজেক্ট সেটআপ</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>জেএসএক্স(JSX) পরিচিতি</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>কি, কেন এবং কিভাবে?</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>প্রোজেক্ট সেটআপ</h4>
                <img src={arrownext} />
              </li>
              <li>
                <h4>জেএসএক্স(JSX) পরিচিতি</h4>
                <img src={arrownext} />
              </li>
            </ul>
          </div>
        </section>
        <footer className="footer-area">
          <div className="footer">
            <div className="left">
              <p>This is a real example of react app</p>
            </div>
            <div className="right">
              <p>By Zonayed Ahmed</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
