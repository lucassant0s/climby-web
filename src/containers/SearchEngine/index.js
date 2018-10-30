import React, { Component } from 'react';
import './index.css';
import {
  Header,
  Footer
} from '../../views/Landing'

import {
  Card,
  Filters,
  Sidebar
} from '../../views/SearchEngine';

class SearchEngine extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <section className="section cb-search-engine">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <Sidebar />
              </div>
              <div class="col-sm-9">
                <Filters />
                <Card />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default SearchEngine;
