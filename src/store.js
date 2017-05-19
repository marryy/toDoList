// import { createStore } from 'redux';
// import rootReducer from  './reducers';
//
// export default(initialState) => {
// 	return createStore(rootReducer, initialState);
// };

//
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers/index';
// import createLogger from 'redux-logger';
//
// // Setup
// const middleWare = [];
//
// // Logger Middleware. This always has to be last
// const loggerMiddleware = createLogger({
// 	predicate: () => process.env.NODE_ENV === 'development',
// });
// middleWare.push(loggerMiddleware);
//
// const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
// export function makeStore() {
// 	return createStoreWithMiddleware(reducers);
// };

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';

const middleWare = [];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
export function makeStore() {
	return createStoreWithMiddleware(reducers);
}