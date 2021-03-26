import { ADD_GOAL, REMOVE_GOAL } from '../constants/goals';
import API from 'goals-todos-api';

const addGoal = (goal) => ({
	type: ADD_GOAL,
	goal
});
const removeGoal = (id) => ({
	type: REMOVE_GOAL,
	id
});

export const handleRemoveGoal = (goal) => {
	return (dispatch) => {
		dispatch(removeGoal(goal.id));
		return API.deleteGoal(goal.id).catch(() => {
			dispatch(addGoal(goal));
			alert('An Error Occurred, Try Again Later');
		});
	};
};
export const handleAddGoal = (name, closure) => {
	return (dispatch) => {
		return API.saveGoal(name)
			.then((goal) => {
				dispatch(addGoal(goal));
				closure();
			})
			.catch(() => alert('An Error Occurred, Try Again Later'));
	};
};
