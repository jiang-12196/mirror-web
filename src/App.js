import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mirror, {actions, connect} from 'mirrorx';


mirror.model({
    name: 'app',
    initialState: 0,
    reducers: {
        increment(state) {return state + 1},
        decrement(state) {return state - 1}
    },
    effects: {
        async incrementAsync() {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            });
            actions.app.increment()
        }
    }
});

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

