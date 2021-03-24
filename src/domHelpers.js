import { store } from './app.js';
import { addTodo, removeTodo, toggleTodo, addGoal, removeGoal } from './actionCreators.js';
import { checkAndDispatch } from "./middlewares.js";

// ID Helper
const generateId = () => Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
// DOM Helper
const createRemoveBtn = (onClick) => {
	const btn = document.createElement('button');
	btn.innerHTML = 'X';
	btn.addEventListener('click', onClick);
	return btn;
};

// DOM Code
export const addTodoToStore = () => {
	const input = document.getElementById('todo'),
		name = input.value;
	input.value = '';

	checkAndDispatch(store,
		addTodo({
			id: generateId(),
			name,
			complete: false
		})
	);
};

export const addGoalToStore = () => {
	const input = document.getElementById('goal'),
		name = input.value;
	input.value = '';

	checkAndDispatch(store,
		addGoal({
			id: generateId(),
			name
		})
	);
};

export const addTodoToDOM = (todo) => {
	const node = document.createElement('li'),
		text = document.createTextNode(todo.name),
		removeBtn = createRemoveBtn(() => {
			checkAndDispatch(store,removeTodo(todo.id));
		});
	node.appendChild(text);
	node.appendChild(removeBtn);

	node.style.textDecoration = todo.complete ? 'line-through' : 'none';
	node.addEventListener('click', () => {
		checkAndDispatch(store,toggleTodo(todo.id));
	});

	document.getElementById('todos').appendChild(node);
};

export const addGoalToDOM = (goal) => {
	const node = document.createElement('li'),
		text = document.createTextNode(goal.name),
		removeBtn = createRemoveBtn(() => {
			checkAndDispatch(store,removeGoal(goal.id));
		});
	node.appendChild(text);
	node.appendChild(removeBtn);

	document.getElementById('goals').appendChild(node);
};
