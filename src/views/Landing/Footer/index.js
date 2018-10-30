import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Footer = ({ }) => (
  <footer className="footer has-cards">
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <img src="../../assets/img/theme/logo_invertida.png" width="250" />
        </div>
        <div className="col-sm-3">
          <a href="#" className="cb-link-footer">contato@climby.com</a><br />
          <a href="#" className="cb-link-footer">Quem somos</a><br />
          <a href="#" className="cb-link-footer">Trabalhe conosco</a>
        </div>
        <div className="col-sm-6">
          <i className="fa fa-youtube-play cb-icon-footer" aria-hidden="true"></i>
          <i className="fa fa-twitter-square cb-icon-footer" aria-hidden="true"></i>
          <i className="fa fa-facebook-square cb-icon-footer" aria-hidden="true"></i>
          <i className="fa fa-instagram cb-icon-footer" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div className="container">
      <hr />
      <div className="row align-items-center justify-content-md-between">
        <div className="col-md-12">
          <div className="copyright cb-copyright">
            &copy; 2018
            <a href="#"> Climby - Todos os direitos reservados.</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;