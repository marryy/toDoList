export default(state = [], action) => {
	switch (action.type) {
		case 'add':
			return [...state, action.category];
		default:
			return state;
	}
};