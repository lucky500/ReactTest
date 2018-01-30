import React from 'react';
import ReactDOM from 'react-dom';
import products from './data/data.json';

import 'modules/font-awesome/css/font-awesome.min.css';
import 'modules/bootstrap/dist/css/bootstrap.min.css';
import './main/app.less';
import Data from './data/data.json';

import App from './main/app';



ReactDOM.render(<App products={Data}/>, document.getElementById('react-app'));