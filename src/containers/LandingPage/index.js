import React, { Component } from 'react';
import './index.css';

import {
  Header,
  Content,
  Footer
} from '../../views/Landing';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default LandingPage;