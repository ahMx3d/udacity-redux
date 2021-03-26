import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from '../actions/todos';
import List from './List';

class Todos extends Component {
	addItem = (e) => {
		e.preventDefault();

		this.props.dispatch(handleAddTodo(this.input.value, () => (this.input.value = '')));
	};
	removeItem = (todo) => {
		this.props.dispatch(handleDeleteTodo(todo));
	};
	toggleItem = (todo) => {
		this.props.dispatch(handleToggleTodo(todo.id));
	};

	render() {
		return (
			<div>
				<h2>Todos List</h2>
				<input type="text" placeholder="Add Todo" ref={(input) => (this.input = input)} />
				<button onClick={this.addItem}>Add Todo</button>
				<List toggle={this.toggleItem} remove={this.removeItem} items={this.props.todos} />
			</div>
		);
	}
}

const ConnectedTodos = connect((state) => ({
	todos: state.todos
}))(Todos);

export default ConnectedTodos;
