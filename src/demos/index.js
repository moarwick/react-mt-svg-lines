import React from 'react';
import ReactDOM from 'react-dom';
import DemoPage from './components/DemoPage';

require('./stylesheet.scss');

ReactDOM.render(<DemoPage />, document.getElementById('component'));
