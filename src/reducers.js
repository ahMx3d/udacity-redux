import { ADD_TODO, ADD_GOAL, REMOVE_TODO, REMOVE_GOAL, TOGGLE_TODO } from './constants.js';
// Composite Root Reducer
export const app = (state = {}, action) => {
	return {
		todos: todos(state.todos, action),
		goals: goals(state.goals, action)
	};
};

// Todos Reducer Function
export const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return state.concat([ action.todo ]);
		case REMOVE_TODO:
			return state.filter((todo) => todo.id !== action.id);
		case TOGGLE_TODO:
			return state.map(
				(todo) => (todo.id !== action.id ? todo : Object.assign({}, todo, { complete: !todo.complete }))
			);
		default:
			return state;
	}
};

// Goals Reducer Function
export const goals = (state = [], action) => {
	switch (action.type) {
		case ADD_GOAL:
			return state.concat([ action.goal ]);
		case REMOVE_GOAL:
			return state.filter((goal) => goal.id !== action.id);
		default:
			return state;
	}
};
