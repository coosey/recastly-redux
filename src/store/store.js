import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

//root reducer
//object
var initialState = {
  currentVideo: {},
  videoList: exampleVideoData
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));


// store.subscribe(() => {
//   console.log('current state', store.getState());
// })

// store.subscribe(render);


export default store;