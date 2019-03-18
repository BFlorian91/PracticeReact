import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Weather from './components/weatherApi';

ReactDOM.render(<Weather />, document.getElementById('root'));

serviceWorker.unregister();
