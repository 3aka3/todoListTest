import React from 'react';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';   

import 'bootstrap/dist/css/bootstrap.min.css';

import Grid  from './Grid/Grid.js';
  
import reducers from '../reducers';

const persistedState = localStorage.getItem('addStore') ? JSON.parse(localStorage.getItem('addStore')) : {}
const store = createStore(reducers, persistedState, applyMiddleware(thunk));
store.subscribe( () => localStorage.setItem('addStore', JSON.stringify(store.getState())) );

export default class App extends React.Component{
	
   render(){
     return (
      <Provider store={store}>	 
        <Grid />
	  </Provider>
   )}
}