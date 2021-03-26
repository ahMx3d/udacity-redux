import { ADD_GOAL, REMOVE_GOAL } from '../constants/goals';
import { RECEIVE_DATA } from '../constants/shared';

const goals = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_DATA:
			return action.goals;
		case ADD_GOAL:
			return state.concat([ action.goal ]);
		case REMOVE_GOAL:
			return state.filter((goal) => goal.id !== action.id);
		default:
			return state;
	}
};

export default goals;
