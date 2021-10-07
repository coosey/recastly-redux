import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import store from './store/store.js';

//TODO: Import the Provider component from 'react-redux' here!
//example from lecture
import { Provider } from 'react-redux';

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
  // <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />,
  // document.getElementById('app')
  <Provider store={store}><App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />
  </Provider>, document.getElementById('app')

  // <Provider store={store}>
  //   <App />
  // </Provider>,
  // API_KEY = { YOUTUBE_API_KEY}, searchYouTube = {searchYouTube},
  // document.getElementById('app')

);
