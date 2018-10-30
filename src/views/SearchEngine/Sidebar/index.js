import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Sidebar = ({ }) => (
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <form>
            <div class="form-group">
              <input type="email" class="form-control cb-filter-name" aria-describedby="NOME" placeholder="Nome" />
            </div>
            <div className="form-group">
              <select className="cb-custom-select cb-filter-select">
                <option selected="selected" className="form-control">Cidade</option>
              </select>
            </div>
            <div className="form-group">
              <select className="cb-custom-select cb-filter-select">
                <option selected="selected" className="form-control">Estado</option>
              </select>
            </div>
            <p className="lead">ÁREAS</p>
            <span>Profissional Coach</span>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                Carreiras
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                Concursos
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                Empreendedores
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                Executivos
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                Negócios
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                Profissional
              </label>
            </div>
            <br />
            <span>Life Coach</span>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                Esperitual
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">
                Educacional
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {};

export default Sidebar;