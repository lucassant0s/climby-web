import React, { Component } from 'react';
import './App.css';

import {
  Content,
  Footer,
  Header
} from '../views/Landing';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
