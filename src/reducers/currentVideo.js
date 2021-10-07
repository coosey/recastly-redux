import Redux from 'redux';
// const counterReducer = function(state = 0, action) {
//   switch(action.type) {
//       case 'INCREMENT':
//           return state + 1;
//       case 'DECREMENT':
//           if (state > 0) {
//               return state - 1;
//           } else {
//               return state;
//           }
//       case 'RESET':
//           return 0;
//       default:
//           return state;
//   }
// }

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video;
  default:
    return state;
  }

};

export default currentVideoReducer;
