import api from 'api';

export const ADD_CATEGORY_ACTION = 'ADD_CATEGORY_ACTION';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export function addCategoryAction() {
  return {
    type: ADD_CATEGORY_ACTION,
  };
}

export function addCategory(data) {
  return {
	  type: ADD_CATEGORY,
	  data
  };
}

export function undo() {
	return {
		type: UNDO
	};
}

export function redo() {
	return {
		type: REDO
	};
}