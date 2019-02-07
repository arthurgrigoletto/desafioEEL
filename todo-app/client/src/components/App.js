import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './layout/Navbar';
import Todo from './todo/Todo';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Todo} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
