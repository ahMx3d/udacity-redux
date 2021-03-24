import createStore from './Redux.js';
import { app } from './reducers.js';

export const store = createStore(app);