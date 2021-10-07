import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

//var SearchContainer = () => {};

//example from lecture

// var mapStateToProps = function(state) {
//   return {

//   };
// };

// var mapDispatchToProps = function(dispatch) {
//   return {
//     //dispatch(changeVideoList(videos));
//     handleSearchInputChange: (type) => dispatch({ type })
//   };
// };

var mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (video) => dispatch(handleVideoSearch(video))
  };
};

//connect(mapStateToProps, mapDispatchToProps);
var SearchContainer = connect(null, mapDispatchToProps)(Search);


export default SearchContainer;
