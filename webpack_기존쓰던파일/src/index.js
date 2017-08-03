import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);

