// Redux Thunk Applied Manually
const thunk = (store) => (next) => (action) => {
	if (typeof action === 'function') {
		return action(store.dispatch)
	}
	return next(action)
}
