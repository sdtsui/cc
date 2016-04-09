let Rx = require('rx');
let React = require('react');
let ReactDOM = require('react-dom');
let Model = require('./model');
import Intent from './intent';
import App from './app/app.js'

let Observable = Model.subject.map((appState) => {return appState;});

Observable.subscribe((appState) => {
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});

Intent.startAllTests();