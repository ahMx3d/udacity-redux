import { ADD_TODO, ADD_GOAL } from "./constants.js";

export const checkAndDispatch = (store, action) => {
	if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
		return alert("Nope, That's a bad idea");
	}
	if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
		return alert("Nope, That's a bad idea");
	}
	return store.dispatch(action);
};
