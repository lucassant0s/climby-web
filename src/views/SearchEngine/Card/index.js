import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Card = ({ }) => (
  <div className="container">
    <div className="row">
      <div className="card shadow col-md-12 p-3">
        <div className="row ">
          <div className="col-md-4 cb-image-card-result">
            <img className="w-100" src="https://via.placeholder.com/350x350" />
            <div class="container">
              <div class="row">
                <div class="col-sm-6 cb-card-play">
                  <i class="fa fa-play cb-card-icon"></i>
                </div>
                <div class="col-sm-6 cb-card-session">
                  <i class="fa fa-sliders cb-card-icon"></i>
                </div>
              </div>
            </div>
            <br />
            <button href="https://www.google.com" className="btn btn-primary cb-btn-session">SESSÃO GRATUITA</button>
          </div>
          <div className="col-md-8">
            <div className="card-block">
              <h6 className="card-title">Card Title</h6>
              <p className="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="https://www.google.com" className="btn btn-primary">read more...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {};

export default Card;