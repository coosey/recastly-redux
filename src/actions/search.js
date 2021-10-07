import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

//var YOUTUBE_API_KEY = 'AIzaSyDrwKcGVtzPZSb0ly8iXr5g1qm3dMdvt_0';

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
