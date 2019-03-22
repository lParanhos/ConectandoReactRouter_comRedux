import React, { Component } from 'react';

import { Provider } from 'react-redux';

import Sidebar from './components/sidebar/sidebar';
import Video from './components/video/video';

import store from './store/store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;
