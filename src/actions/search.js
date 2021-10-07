import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';

//var YOUTUBE_API_KEY = 'AIzaSyDrwKcGVtzPZSb0ly8iXr5g1qm3dMdvt_0';

//DK: example of thunk usage
//const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  //utilize the searchYouTube.js (GET method)

  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, function(videos) {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  };
};

export default handleVideoSearch;

// export var mockYouTubeApi = function (callback) {
//   var called = {count: 0};
//   $(document).ajaxSend(function( event, request, settings ) {
//     settings.url = 'http://127.0.0.1:8081/spec/data/exampleVideoData.json';
//     called.count++;
//   });
//   return called;
// };

// export var mockThunk = function(x) {
//   return function(dispatch) {
//     setTimeout(function() {
//       dispatch({
//         type: 'CHANGE_VIDEO',
//       });
//     }, 100);
//   };
// };


