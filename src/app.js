// import createStore from './Redux.js';
// import { app } from './reducers.js';
import { todos, goals } from './reducers.js';

export const store = Redux.createStore(Redux.combineReducers({ todos, goals }));
