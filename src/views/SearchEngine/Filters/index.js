import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Filters = ({ }) => (
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm cb-result-search">
          <span>62 coaches encontrados</span>
        </div>
        <div class="col-sm ">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div className="form-group">
                  <select className="form-control cb-form-select">
                    <option selected="selected" className="form-control">10 POR PÁGINA</option>
                  </select>
                </div>
              </div>
              <div class="col-sm">
                <div className="form-group">
                  <select className="form-control cb-form-select">
                    <option selected="selected" className="form-control">CLASSIFICAR POR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Filters.propTypes = {};

export default Filters;