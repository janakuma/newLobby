import React from 'react';
import ReactDOM from 'react-dom';
import App from './apps/components/app/app';
import './apps/styles/styles.scss';
import { createStore } from 'redux';

const store = createStore(todos, ['Use Redux']);

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

console.log(store.getState());
// [ 'Use Redux', 'Read the docs' ]

ReactDOM.render(<App/>, document.getElementById('app'));