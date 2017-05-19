export const addCategory = (category) => {
	console.log('adding category:', category);
	return {
		type: 'add',
		category
	};
};