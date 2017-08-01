import React from 'react';
import ReactDOM from 'react-dom';
import App from './apps/components/app/app';
import './apps/styles/styles.scss';
import {createStore} from 'redux';
import allReducers from './apps/components/reducers';

const store = createStore(allReducers);
ReactDOM.render(<App/>, document.getElementById('app'));