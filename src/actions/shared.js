import { RECEIVE_DATA } from '../constants/shared';
import API from 'goals-todos-api';

const receiveData = (todos, goals) => ({
	type: RECEIVE_DATA,
	todos,
	goals
});

export const handleInitialData = () => {
	return (dispatch) => {
		return Promise.all([ API.fetchTodos(), API.fetchGoals() ]).then(([ todos, goals ]) => {
			dispatch(receiveData(todos, goals));
		});
	};
};
