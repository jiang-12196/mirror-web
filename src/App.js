import React from 'react';
import logo from './logo.svg';
import './App.css';
import {actions, connect} from 'mirrorx';

const App = (props) => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>
        <div>
            <h1>{props.count}</h1>
            <button onClick={() => actions.app.decrement()}>-</button>
            <button onClick={() => actions.app.increment()}>+</button>
            <button onClick={() => actions.app.incrementAsync()}>+ Async</button>
        </div>
    </div>
);

function stateToProps(state) {
    return {
        count: state.app
    }
}

export default connect(stateToProps)(App);

