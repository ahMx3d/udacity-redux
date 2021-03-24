
		const generateId = () => Math.random().toString(36).substring(2) + new Date().getTime().toString(36);

		const ADD_TODO = 'ADD_TODO',
			REMOVE_TODO = 'REMOVE_TODO',
			TOGGLE_TODO = 'TOGGLE_TODO',
			ADD_GOAL = 'ADD_GOAL',
			REMOVE_GOAL = 'REMOVE_GOAL';

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

		const addGoal = (goal) => ({
			type: ADD_GOAL,
			goal
		});
		const removeGoal = (id) => ({
			type: REMOVE_GOAL,
			id
		});

		// Todos Reducer Function
		const todos = (state = [], action) => {
			switch (action.type) {
				case 'ADD_TODO':
					return state.concat([action.todo]);
				case 'REMOVE_TODO':
					return state.filter((todo) => todo.id !== action.id);
				case 'TOGGLE_TODO':
					return state.map(
						(todo) => (todo.id !== action.id ? todo : Object.assign({}, todo, { complete: !todo.complete }))
					);
				default:
					return state;
			}
		};

		// Goals Reducer Function
		const goals = (state = [], action) => {
			switch (action.type) {
				case 'ADD_GOAL':
					return state.concat([action.goal]);
				case 'REMOVE_GOAL':
					return state.filter((goal) => goal.id !== action.id);
				default:
					return state;
			}
		};

		const checker = (store) => (next) => (action) => {
			if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
				return alert("Nope, That's a bad idea");
			}
			if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
				return alert("Nope, That's a bad idea");
			}
			return next(action);
		};

		const logger = (store) => (next) => (action) => {
			console.group(action.type);
			console.log('Action: ', action);
			// Hits dispatch in case there is no middleware after the current one
			const result = next(action);
			console.log('New State: ', store.getState());
			console.groupEnd();
			return result;
		};

		const store = Redux.createStore(
			Redux.combineReducers({
				todos,
				goals
			}),
			Redux.applyMiddleware(checker, logger)
		);

		store.subscribe(() => {
			const { goals, todos } = store.getState();

			document.getElementById('goals').innerHTML = '';
			document.getElementById('todos').innerHTML = '';

			goals.forEach(addGoalToDOM);
			todos.forEach(addTodoToDOM);
		});

		const addTodoToStore = () => {
			const input = document.getElementById('todo'),
				name = input.value;
			input.value = '';

			store.dispatch(
				addTodo({
					id: generateId(),
					name,
					complete: false
				})
			);
		};

		const addGoalToStore = () => {
			const input = document.getElementById('goal'),
				name = input.value;
			input.value = '';

			store.dispatch(
				addGoal({
					id: generateId(),
					name
				})
			);
		};

		document.getElementById('todo-btn').addEventListener('click', addTodoToStore);
		document.getElementById('goal-btn').addEventListener('click', addGoalToStore);

		const createRemoveBtn = (onClick) => {
			const btn = document.createElement('button');
			btn.innerHTML = 'X';
			btn.addEventListener('click', onClick);
			return btn;
		};

		const addTodoToDOM = (todo) => {
			const node = document.createElement('li'),
				text = document.createTextNode(todo.name),
				removeBtn = createRemoveBtn(() => {
					store.dispatch(removeTodo(todo.id));
				});
			node.appendChild(text);
			node.appendChild(removeBtn);

			node.style.textDecoration = todo.complete ? 'line-through' : 'none';
			node.addEventListener('click', () => {
				store.dispatch(toggleTodo(todo.id));
			});

			document.getElementById('todos').appendChild(node);
		};

		const addGoalToDOM = (goal) => {
			const node = document.createElement('li'),
				text = document.createTextNode(goal.name),
				removeBtn = createRemoveBtn(() => {
					store.dispatch(removeGoal(goal.id));
				});
			node.appendChild(text);
			node.appendChild(removeBtn);

			document.getElementById('goals').appendChild(node);
		};