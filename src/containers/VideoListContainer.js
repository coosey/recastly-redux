import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// var VideoListContainer = () => {};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
var mapStateToProps = function(state) {
  return {
    videos: state.videoList
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    handleVideoListEntryTitleClick: (type) => dispatch({ type })
  };
};

//conect(mapStateToProps, mapDispatchToProps);
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
