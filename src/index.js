import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {render} from 'mirrorx';
// eslint-disable-next-line
import mirror from './data/model/app';

render(<App />, document.getElementById('root'));
registerServiceWorker();
