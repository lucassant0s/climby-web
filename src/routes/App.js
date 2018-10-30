import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import './App.css';
import {
  LandingPage,
  SearchEngine
} from '../containers';

const hit = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <div>
        <Router history={hit}>
          <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/search" component={SearchEngine} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
