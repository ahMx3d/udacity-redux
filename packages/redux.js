// Redux Library
const createStore = (reducer) => {
	let _state,
		_listeners = [];

	const getState = () => _state;

	const subscribe = (listener) => {
		_listeners.push(listener);
		return () => {
			_listeners = _listeners.filter((l) => l !== listener);
		};
	};

	const dispatch = (action) => {
		_state = reducer(_state, action);
		_listeners.forEach((_listener) => _listener());
	};

	return {
		getState,
		subscribe,
		dispatch
	};
};
export default createStore;