import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import SvgBlockquote from '../SvgBlockquote'

const Content = ({ }) => (
  <div>
    <div className="position-relative">
      <section className="section section-lg section-shaped pb-300">
        <div className="shape">
          <div className="row cb-row-shape">
            <div className="col-sm cb-bg-find-coach">
            </div>
            <div className="col-sm cb-bg-coach">
            </div>
          </div>
        </div>
      </section>
    </div>
    <section className="section section-lg cb-section-find-coach">
      <div className="container">
        <div className="card shadow-lg border-0" style={{ backgroundColor: '#193f51' }}>
          <div className="p-5">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h3 className="text-white" style={{ textAlign: 'center' }}>Encontre um Coaching e agende sua sessão</h3>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option selected="selected" className="form-control">TIPO DE COACHING</option>
                        <option className="form-control" value="volvo">Volvo</option>
                        <option className="form-control" value="saab">Saab</option>
                        <option className="form-control" value="opel">Opel</option>
                        <option className="form-control" value="audi">Audi</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-group">
                      <select className="form-control">
                        <option selected="selected" className="form-control">ESTADO</option>
                        <option className="form-control" value="volvo">Volvo</option>
                        <option className="form-control" value="saab">Saab</option>
                        <option className="form-control" value="opel">Opel</option>
                        <option className="form-control" value="audi">Audi</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm">
                    <button type="button" className="btn btn-lg btn-block" style={{ backgroundColor: '#b2cd4b', color: '#FFF' }}>PROCURAR</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section" style={{ backgroundColor: 'rgb(30, 75, 95)' }}>
      <div className="container">
        <div className="row row-grid align-items-center">
          <div className="col-md-12">
            <div className="pl-md-5">
              <h3 style={{ color: '#f6f9fc' }}>Our customers</h3>
              <p className="lead" style={{ color: '#f6f9fc' }}>Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>
              <p style={{ color: '#f6f9fc' }}>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
              <p style={{ color: '#f6f9fc' }}>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <div class="alert alert-info" role="alert"></div>
                </div>
                <div class="col-sm">
                  <div class="alert alert-info" role="alert"></div>
                </div>
                <div class="col-sm">
                  <div class="alert alert-info" role="alert"></div>
                </div>
                <div class="col-sm">
                  <div class="alert alert-info" role="alert"></div>
                </div>
                <div class="col-sm">
                  <div class="alert alert-info" role="alert"></div>
                </div>
                <div class="col-sm">
                  <div class="alert alert-info" role="alert"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg">
      <div className="container">
        <div className="row justify-content-center text-center mb-lg">
          <div className="col-lg-12">
            <p className="lead-rating text-muted">Faça uma avaliação de autoconhecimento gratuita e veja como um Coaching poderá ajudar a alcançar seus objetivos!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="px-4 cb-spotlight">
              <i className="fa fa-ravelry cb-icon-spotlight" aria-hidden="true"></i>
              <div className="pt-4 text-center">
                <h5 className="title">
                  <span className="d-block mb-1">Teste simples e rápido feito por profissionais da área</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="px-4 cb-spotlight">
              <i className="fa fa-signal cb-icon-spotlight" aria-hidden="true"></i>
              <div className="pt-4 text-center">
                <h5 className="title">
                  <span className="d-block mb-1">Mapa com detalhes estatísticos do seu perfil profissional</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="px-4 cb-spotlight">
              <i className="fa fa-file-text cb-icon-spotlight" aria-hidden="true"></i>
              <div className="pt-4 text-center">
                <h5 className="title">
                  <span className="d-block mb-1">Ánalise completa dos seus pontos fortes e fracos</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section" style={{ backgroundColor: 'rgb(24, 55, 70)' }}>
      <div className="container">
        <div className="row row-grid align-items-center">
          <div className="col-md-12">
            <div className="pl-md-5">
              <h3 style={{ color: '#f6f9fc' }}>Our customers</h3>
              <p className="lead" style={{ color: '#f6f9fc' }}>Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>
              <p style={{ color: '#f6f9fc' }}>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
              <p style={{ color: '#f6f9fc' }}>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div class="alert alert-info" role="alert"></div>
              </div>
              <div class="col-sm">
                <div class="alert alert-info" role="alert"></div>
              </div>
              <div class="col-sm">
                <div class="alert alert-info" role="alert"></div>
              </div>
              <div class="col-sm">
                <div class="alert alert-info" role="alert"></div>
              </div>
              <div class="col-sm">
                <div class="alert alert-info" role="alert"></div>
              </div>
              <div class="col-sm">
                <div class="alert alert-info" role="alert"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg cb-bg-blog">
      <div className="container">
        <div className="row justify-content-center text-center cb-mb-lg">
          <div className="col-lg-8">
            <p className="lead-blog text-muted">Destaque do nosso Blog SuperAção</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="card shadow cb-card-blog" style={{ width: '18rem' }}>
              <img src="../assets/img/theme/team-3-800x800.jpg" style={{ height: 180 }} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" className="btn cb-btn-more cb-btn">Ver mais</button>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card shadow cb-card-blog" style={{ width: '18rem' }}>
              <img src="../assets/img/theme/team-3-800x800.jpg" style={{ height: 180 }} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" className="btn cb-btn-more cb-btn">Ver mais</button>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card shadow cb-card-blog" style={{ width: '18rem' }}>
              <img src="../assets/img/theme/team-3-800x800.jpg" style={{ height: 180 }} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button href="#" className="btn cb-btn-more cb-btn">Ver mais</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-newsletter" style={{
      backgroundColor: 'rgb(30, 75, 95)',
      paddingBottom: '0 !important',
      paddingTop: '0 !important',
      height: '400px'
    }}>
      <div className="container pt-lg pb-300">
        <div className="row text-center justify-content-center">
          <div className="col-lg-10">
            <h2 className="display-4 text-white">ASSINE NOSSA NEWSLETTER E ACOMPANHE O UNIVERSO COACH</h2>
          </div>
        </div>
        <div className="form-group cb-form-newsletter">
          <div className="row">
            <div className="col-9">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                </div>
                <input className="form-control" placeholder="Email address" type="email" />
              </div>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-newsletter btn-round btn-block btn-lg">ASSINAR</button>
            </div>
          </div>
        </div>
      </div>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
  </div>
);

Content.propTypes = {};

Content.defaultProps = {};

export default Content;