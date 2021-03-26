import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddGoal, handleRemoveGoal } from '../actions/goals';
import List from './List';

class Goals extends Component {
	addItem = (e) => {
		e.preventDefault();

		this.props.dispatch(handleAddGoal(this.input.value, () => (this.input.value = '')));
	};

	removeItem = (goal) => {
		this.props.dispatch(handleRemoveGoal(goal));
	};

	render() {
		return (
			<div>
				<h2>Goals List</h2>
				<input type="text" placeholder="Add Goal" ref={(input) => (this.input = input)} />
				<button onClick={this.addItem}>Add Goal</button>
				<List remove={this.removeItem} items={this.props.goals} />
			</div>
		);
	}
}

const ConnectedGoals = connect((state) => ({
	goals: state.goals
}))(Goals);

export default ConnectedGoals;
