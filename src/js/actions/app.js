import api from 'api';

export const ADD_CATEGORY_ACTION = 'ADD_CATEGORY_ACTION';
export const ADD_CATEGORY = 'ADD_CATEGORY';

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
