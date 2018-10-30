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
              <h6 className="display-4" style={{ marginBottom: '-1%' }}>Title</h6>
              <span>Subtitle</span>
              <br />
              <br />
              <div class="row">
                <div class="col-sm-12">
                  <span className="small">ÁREAS:</span>
                </div>
                <div class="col-sm-12">
                  <span class="badge badge-radius badge-default" style={{ backgroundColor: '#fea728', color: '#FFF', marginRight: 10 }}>Default</span>
                  <span class="badge badge-radius badge-default" style={{ backgroundColor: '#fea728', color: '#FFF', marginRight: 10 }}>Default</span>
                  <span class="badge badge-radius badge-default" style={{ backgroundColor: '#d19843', color: '#FFF' }}>MAIS</span>
                </div>
              </div>
              <br />
              <p className="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="container">
                <div class="row">
                  <div class="col-sm-3">
                    <button type="button" className="btn btn-primary">BUTTOM</button>
                  </div>
                  <div class="col-sm-3">
                    <button type="button" className="btn btn-primary">BUTTOM</button>
                  </div>
                  <div class="col-sm-3">
                    <button type="button" className="btn btn-primary">BUTTOM</button>
                  </div>
                  <div class="col-sm-2">
                    <button type="button" className="btn btn-primary">BUTTOM</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {};

export default Card;