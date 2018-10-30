import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

const Header = ({ }) => (
  <header className="header-global">
    <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
      <div className="container" style={{ backgroundColor: 'rgb(30, 75, 95)' }}>
        <Link to="/">
          <a className="navbar-brand mr-lg-5" href="../index.html">
            <img src="../../assets/img/theme/logo.png" />
          </a>
        </Link>
        <span style={{ color: '#FFF' }}>A sua plataforma de Coaching</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar_global">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <Link to="/">
                  <a href="../index.html">
                    <img src="../../assets/img/theme/logo_invertida.png" />
                  </a>
                </Link>
              </div>
              <div className="col-6 collapse-close">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <ul class="navbar-nav align-items-lg-center ml-lg-auto">
            <li class="nav-item">
              <a style={{ fontWeight: 'bold', color: '#fff' }} class="nav-link nav-link-icon" href="">
                O que é?
              </a>
            </li>
            <li class="nav-item">
              <a style={{ fontWeight: 'bold', color: '#fff' }} class="nav-link nav-link-icon" href="">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a style={{ fontWeight: 'bold', color: '#fff' }} class="nav-link nav-link-icon" href="">
                Fale conosco
              </a>
            </li>
            <li class="nav-item d-none d-lg-block ml-lg-4">
              <a href="" target="_blank" class="btn btn-success btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-cloud-download mr-2"></i>
                </span>
                <span class="nav-link-inner--text">Login</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;