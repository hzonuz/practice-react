import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Clock , Toggle , NameForm , ContextTest , CounterApp} from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Clock />
    <Toggle />
    <NameForm />
    <ContextTest />
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
