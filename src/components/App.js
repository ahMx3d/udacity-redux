import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import { handleInitialData } from '../actions/shared';

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(handleInitialData());
	}
	render() {
		return this.props.loading ? (
			<h3>Loading...</h3>
		) : (
			<React.Fragment>
				<ConnectedTodos />
				<ConnectedGoals />
			</React.Fragment>
		);
	}
}

const ConnectedApp = connect((state) => ({
	loading: state.loading
}))(App);

export default ConnectedApp;
