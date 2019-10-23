import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';

render(
  <React.Fragment>
    <StorePicker/>
    <App/>
  </React.Fragment>
  , document.querySelector('#main'));  
