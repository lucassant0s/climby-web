import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ }) => (
  <footer class="footer has-cards">
    <div class="container">
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; 2018
            <a href="" target="_blank">Climby - Todos os direitos reservados.</a>.
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a href="" class="nav-link" target="_blank">Contato</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link" target="_blank">Quem somos</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link" target="_blank">Trabalhe conosco</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;