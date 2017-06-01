import { Map } from 'immutable';

import {
    ADD_CATEGORY_ACTION,
    ADD_CATEGORY
} from 'actions/app';

const initialState = Map({
  categoriesCount: 0,
  categories: []
});

const actionsMap = {
  [ADD_CATEGORY_ACTION]: (state) => {
    const categoriesCount = state.get('categoriesCount') + 1;

    return state.merge({
      categoriesCount,
    });
  },
  [ADD_CATEGORY]: (state, action) => {
  	console.log("STATE", state);
	  let cats = state.categories || [];
	  cats[cats.length] = {id: cats.length, title: action.data};

	  // return (state.merge( [
		//   categories,
	  // ]))
	console.log(state.categories);
	  return Object.assign({}, state, {categories:cats});
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
