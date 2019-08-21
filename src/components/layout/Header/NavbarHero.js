import React, { Component } from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import logo from '../../../img/logo.png'


const NavbarHero = () => {

  return (
    <>
      <section className="hero is-primary is-medium imgLanding">
        <div className="is-paddingless-horizontal topNav">
            <div className="container grid">
                <div className="firstsection">
                    <p className="subtitle is-6 has-text-white isdata">FreightHub – Europe's first digital freight forwarder</p>
                 </div>
            </div>
        </div>
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://freighthub.com/en/">
                  <img src={logo} className="nav-logo" width="200" height="150" alt="FreightHub logo" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item">
                    <strong>Why FreightHub</strong>
                  </a>
                  <a className="navbar-item">
                    <strong>Solutions</strong>
                  </a>
                  <a className="navbar-item">
                    <strong>About Us</strong>
                  </a>
                  <a className="navbar-item">
                    <strong>Logistics Knowledge</strong>
                  </a>
                  <span className="navbar-item">
                  <a className="button is-info" id="navBtn">
                    Test now
                  </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
          <div className="firstsection">
              <div className="content">
                <div className="columns">
                  <div className="column is-half">
                    <h1 className="title is-1 has-text-left has-text-weight-light" id="mainBlack">FreightHub – Europe's first digital freight forwarder
                    </h1>
                  </div>
                  <div className="column"></div>
                </div>
                <div className="columns">
                  <div className="column is-two-fifths">
                    <p className="has-text-left"> We are your co-pilot: handle your global transports with our intuitive freight forwarding platform.
                      You benefit from reliable processes, transparent data and an efficient supply chain.
                     This simplifies the cooperation between your suppliers and employees.
                     </p>
                  </div>
                  <div className="column"></div>
                </div>
              </div>
              <div className="content" id="landingForm">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <a className="button is-large is-info is-fullwidth" id="landBtn">Learn More!</a>
                  </div>
                  <div className="column"></div>
                </div>

              </div>

           </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavbarHero;
