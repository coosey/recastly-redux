import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// const rootReducer = Redux.combineReducers({
//   counter: counterReducer,
//   other: countReducer2
// });

// var rootReducer = combineReducers({
//   currentVideo: currentVideo,
//   videoList: videoList
// });

var rootReducer = combineReducers({currentVideo, videoList});
// This would produce the following state object




//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
