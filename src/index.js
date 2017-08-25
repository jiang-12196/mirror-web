import React from 'react';
import './index.css';
import App from './App';
import WrappedNormalLoginForm from './component/login/login';
import {render, Router, Route} from 'mirrorx';
// eslint-disable-next-line
import mirror from './data/model/app';

render(
    <Router>
        <div>
            <Route path="/index" component={App}/>
            <Route path="/login" component={WrappedNormalLoginForm}/>
        </div>
    </Router>,
    document.getElementById('root')
);
// registerServiceWorker();
