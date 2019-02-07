import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Navbar from './layout/Navbar';
import Characters from './characters/Characters';
import Comics from './comics/Comics';
import Creators from './creators/Creators';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Characters} />
              <Route path="/comics" component={Comics} />
              <Route path="/creators" component={Creators} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;