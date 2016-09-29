// let's go!
import React from 'react';
import {render} from 'react-dom';
import {router} from 'react-router';

/* CSS Imports*/
import './css/style.css';

import StorePicker from './components/StorePicker';

import App from './components/App';

render(<App/>, document.querySelector('#main'));