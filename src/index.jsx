import React from 'react';
import ReactDOM from 'react-dom';
import products from './data/data.json';

//import 'modules/font-awesome/css/font-awesome.min.css';
//import 'modules/bootstrap/dist/css/bootstrap.min.css';
import './main/app.less';

import App from './main/app';



ReactDOM.render(<App products={products}/>, document.getElementById('react-app'));
