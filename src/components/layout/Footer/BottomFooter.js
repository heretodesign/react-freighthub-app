import React, { Component } from 'react'
import { columns, column } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import logo1 from '../../../img/logo1.svg'
import umaiinsta from '../../../img/insta.svg'
import umailinked from '../../../img/linked.svg'

const BottomFooter = () => {

  return (
      <footer className="section footer-btm">
          <div className="container content has-text-centered">
              <div className="columns">
                <div className="column is-2">
                  <div className="firstFooter">
                      <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">Why FreightHub? </h1>
                      <div className="content">
                        <div className="subtitle is-5 has-text-grey">
                          <div className="has-text-left has-text-weight-light">
                              <p className="has-text-left" id="mainFooter">Product</p>
                              <p className="has-text-left" id="mainFooter">Clients</p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">Solutions</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <p className="has-text-left" id="mainFooter">Logistics Solutions</p>
                                    <p className="has-text-left" id="mainFooter">Sea Freight</p>
                                    <p className="has-text-left" id="mainFooter">Air Freight</p>
                                    <p className="has-text-left" id="mainFooter">Rail Freight</p>
                                    <p className="has-text-left" id="mainFooter">Multimodal Transportation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                    <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter"></h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <p className="has-text-left" id="mainFooter">Supply Chain Solutions</p>
                                    <p className="has-text-left" id="mainFooter">Customs Clearance</p>
                                    <p className="has-text-left" id="mainFooter">nsurance</p>
                                    <p className="has-text-left" id="mainFooter">Pre- and On-Carriage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                    <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter"></h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <p className="has-text-left" id="mainFooter">FreightHub for</p>
                                    <p className="has-text-left" id="mainFooter">SMB and LE</p>
                                    <p className="has-text-left" id="mainFooter">FBA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                    <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">About Us</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <p className="has-text-left" id="mainFooter">Company</p>
                                    <p className="has-text-left" id="mainFooter">Jobs</p>
                                    <p className="has-text-left" id="mainFooter">Presse</p>
                                    <p className="has-text-left" id="mainFooter">Contact</p>
                                    <p className="has-text-left" id="mainFooter">CO2-Offsetting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-2">
                    <div className="firstFooter">
                    <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark" id="mainFooter">Logistics Knowledge</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <p className="has-text-left" id="mainFooter">Blog</p>
                                    <p className="has-text-left" id="mainFooter">Resources</p>
                                    <p className="has-text-left" id="mainFooter">Glossary</p>
                                    <p className="has-text-left" id="mainFooter">FAQs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <section className="section">
              <div className="container">
                  <div className="content">
                    <hr className="hr-footer" />
                  </div>
              </div>
          </section>
          <section className="section">
              <div className="container">
                <div className="columns">
                <div className="column is-one-quarter">
                  <div className="content">
                      <div className="subtitle is-5 has-text-white">
                          <p className="has-text-left has-text-weight-light has-text-grey">
                              <a className="navbar-item" href="https://freighthub.com/en/">
                                <img src={logo1} className="nav-logo" width="200" height="150" alt="umai" />
                              </a>
                          </p>
                      </div>
                  </div>
                </div>
                  <div className="column is-one-quarter">
                    <div className="content">
                        <div className="subtitle is-5 has-text-white">
                            <p className="has-text-left has-text-weight-light has-text-grey">
                                <a href="#" className="has-text-right has-text-grey" id="mainFooter">© 2019 FreightHub. All rights reserved.</a>
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
      </footer>
  );
}

export default BottomFooter;
