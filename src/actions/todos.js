import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/todos';
import API from 'goals-todos-api';

const addTodo = (todo) => ({
	type: ADD_TODO,
	todo
});
const removeTodo = (id) => ({
	type: REMOVE_TODO,
	id
});
const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id
});

export const handleAddTodo = (name, closure) => {
	return (dispatch) => {
		return API.saveTodo(name)
			.then((todo) => {
				dispatch(addTodo(todo));
				closure();
			})
			.catch(() => alert('An Error Occurred, Try Again Later'));
	};
};
export const handleDeleteTodo = (todo) => {
	return (dispatch) => {
		dispatch(removeTodo(todo.id));
		return API.deleteTodo(todo.id).catch(() => {
			dispatch(addTodo(todo));
			alert('An Error Occurred, Try Again Later');
		});
	};
};
export const handleToggleTodo = (id) => {
	return (dispatch) => {
		dispatch(toggleTodo(id));
		return API.saveTodoToggle(id).catch(() => {
			dispatch(toggleTodo(id));
			alert('An Error Occurred, Try Again Later');
		});
	};
};
