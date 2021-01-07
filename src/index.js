import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import Content from './Content'
import About from './About'
import Skills from './Skills'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <div class="loader">
    <div class="load-text">
      <div class="loaded-text">H</div>
      <div class="loading-text">ello</div>
    </div>
  </div>
  <div id="main">
    <Nav />
    <Content />
    <About />
    <Skills />
  </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
