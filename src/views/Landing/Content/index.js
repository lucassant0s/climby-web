import React from 'react';
import PropTypes from 'prop-types';

import SvgBlockquote from '../SvgBlockquote'

const Content = ({ }) => (
  <div>
    <div className="position-relative">
      <section className="section section-lg section-shaped pb-250">
        <div className="shape shape-style-1 shape-default">
        </div>
      </section>
    </div>
    <section class="pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-6">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <img src="../assets/img/theme/img-1-1200x1000.jpg" className="card-img-top" />
                    <button style={{ borderColor: 'blanchedalmond', borderRadius: 'inherit', backgroundColor: '#b2cd4b' }} type="button" class="btn btn-primary btn-lg btn-block">ENCONTRE UM COACHING</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <img src="../assets/img/theme/img-1-1200x1000.jpg" className="card-img-top" />
                    <button type="button" style={{ borderColor: 'blanchedalmond', borderRadius: 'inherit', backgroundColor: '#b2cd4b' }} class="btn btn-primary btn-lg btn-block">SOU UM COACHING</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="card shadow-lg border-0" style={{ backgroundColor: '#b2cd4b' }}>
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <h3 class="text-white" style={{ textAlign: 'center' }}>Encontre um Coaching e agende sua sessão</h3>
              </div>
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <select class="form-control">
                        <option selected="selected" class="form-control">TIPO DE COACHING</option>
                        <option class="form-control" value="volvo">Volvo</option>
                        <option class="form-control" value="saab">Saab</option>
                        <option class="form-control" value="opel">Opel</option>
                        <option class="form-control" value="audi">Audi</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm">
                    <div class="form-group">
                      <select class="form-control">
                        <option selected="selected" class="form-control">ESTADO</option>
                        <option class="form-control" value="volvo">Volvo</option>
                        <option class="form-control" value="saab">Saab</option>
                        <option class="form-control" value="opel">Opel</option>
                        <option class="form-control" value="audi">Audi</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm">
                    <button type="button" class="btn btn-primary btn-lg btn-block">PROCURAR</button>
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
          <div className="col-md-6">
            <div className="card shadow border-0" style={{ backgroundColor: '#b2cd4b' }}>
              <img src="../assets/img/theme/img-1-1200x1000.jpg" className="card-img-top" />
              <blockquote className="card-blockquote">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="svg-bg">
                  <polygon points="0,52 583,95 0,95" className="fill-default" />
                  <polygon points="0,42 583,95 683,0 0,95" opacity=".2" className="fill-default" />
                </svg>
                <h4 className="display-3 font-weight-bold text-white">PRECISO DE UM COACHING</h4>
              </blockquote>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pl-md-5">
              <h3 style={{ color: '#f6f9fc' }}>Our customers</h3>
              <p className="lead" style={{ color: '#f6f9fc' }}>Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>
              <p style={{ color: '#f6f9fc' }}>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
              <p style={{ color: '#f6f9fc' }}>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section" style={{ backgroundColor: 'rgb(24, 55, 70)' }}>
      <div className="container">
        <div className="row row-grid align-items-center">
          <div className="col-md-6">
            <div className="pl-md-5">
              <h3 style={{ color: '#f6f9fc' }}>Our customers</h3>
              <p className="lead" style={{ color: '#f6f9fc' }}>Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>
              <p style={{ color: '#f6f9fc' }}>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
              <p style={{ color: '#f6f9fc' }}>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow border-0" style={{ backgroundColor: '#b2cd4b' }}>
              <img src="../assets/img/theme/img-1-1200x1000.jpg" className="card-img-top" />
              <blockquote className="card-blockquote">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="svg-bg">
                  <polygon points="0,52 583,95 0,95" className="fill-default" />
                  <polygon points="0,42 583,95 683,0 0,95" opacity=".2" className="fill-default" />
                </svg>
                <h4 className="display-3 font-weight-bold text-white">QUERO FAZER PARTE</h4>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-lg">
      <div className="container">
        <div className="row justify-content-center text-center mb-lg">
          <div className="col-lg-8">
            <h2 className="display-3">Faça uma avaliação de autoconhecimento gratuita</h2>
            <p className="lead text-muted">Veja como um Coaching poderá ajudar a alcançar seus objetivos!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="px-4">
              <img src="../assets/img/theme/team-2-800x800.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{ width: '200px' }} />
              <div className="pt-4 text-center">
                <h5 className="title">
                  <span className="d-block mb-1">Teste simples e rápido feito por profissionais da área</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="px-4">
              <img src="../assets/img/theme/team-3-800x800.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{ width: '200px' }} />
              <div className="pt-4 text-center">
                <h5 className="title">
                  <span className="d-block mb-1">Mapa com detalhes estatísticos do seu perfil profissional</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="px-4">
              <img src="../assets/img/theme/team-4-800x800.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{ width: '200px' }} />
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
    <section className="section section-lg bg-gradient-default">
      <div className="container pt-lg pb-300">
        <div className="row text-center justify-content-center">
          <div className="col-lg-10">
            <h2 className="display-3 text-white">Destaques do nosso Blog de SuperAÇÃO</h2>
          </div>
        </div>
        <div className="row row-grid mt-5">
          <div className="col-lg-4">
          <img src="../assets/img/theme/team-2-800x800.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{ width: '200px' }} />
            <h5 className="text-white mt-3">Building tools</h5>
            <p className="text-white mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="col-lg-4">
          <img src="../assets/img/theme/team-2-800x800.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{ width: '200px' }} />
            <h5 className="text-white mt-3">Grow your market</h5>
            <p className="text-white mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="col-lg-4">
          <img src="../assets/img/theme/team-2-800x800.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{ width: '200px' }} />
            <h5 className="text-white mt-3">Launch time</h5>
            <p className="text-white mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
    <section className="section section-lg pt-lg-0 section-contact-us">
      <div className="container">
        <div className="row justify-content-center mt--300">
          <div className="col-lg-8">
            <div className="card bg-gradient-secondary shadow">
              <div className="card-body p-lg-5">
                <h4 className="mb-1">Assine nossa newslatter</h4>
                <p className="mt-0">Acompanhe tudo sobre universo coaching</p>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" placeholder="Email address" type="email" />
                  </div>
                </div>
                <div>
                  <button type="button" className="btn btn-default btn-round btn-block btn-lg">ASSINAR</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

Content.propTypes = {};

Content.defaultProps = {};

export default Content;