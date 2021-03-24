import { ADD_TODO, ADD_GOAL } from './constants.js';

export const checkAndDispatch = (store, action) => {
	if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
		return alert("Nope, That's a bad idea");
	}
	if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
		return alert("Nope, That's a bad idea");
	}
	return store.dispatch(action);
};

export const checker = (store) => (next) => (action) => {
	if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
		return alert("Nope, That's a bad idea");
	}
	if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
		return alert("Nope, That's a bad idea");
	}
	return next(action);
};

export const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log('Action: ', action);
    // Hits dispatch in case there is no middleware after the current one
	const result = next(action);
	console.log('New State: ', store.getState());
	console.groupEnd();
	return result;
};
