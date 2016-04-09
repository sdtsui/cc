let Rx = require('rx');
let React = require('react');
let ReactDOM = require('react-dom');
import tests from './appState';

console.log('appState :', appState);

// let Model = {
//   subject : new Rx.ReplaySubject(1);
// };

// let Observable = Model.subject.map((appState) => {return appState;});

// Observable.subscribe((appState) => {
//   ReactDOM.render(
//     <TodoApp {...appState}/>,
//     document.getElementById('app')
//   );
// });
