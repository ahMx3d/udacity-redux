import { store } from './app.js';

import { addTodoToStore, addGoalToStore, addTodoToDOM, addGoalToDOM } from './domHelpers.js';

store.subscribe(() => {
	const { goals, todos } = store.getState();

	document.getElementById('goals').innerHTML = '';
	document.getElementById('todos').innerHTML = '';

	goals.forEach(addGoalToDOM);
	todos.forEach(addTodoToDOM);
});

document.getElementById('todo-btn').addEventListener('click', addTodoToStore);
document.getElementById('goal-btn').addEventListener('click', addGoalToStore);
