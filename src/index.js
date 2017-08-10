import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
