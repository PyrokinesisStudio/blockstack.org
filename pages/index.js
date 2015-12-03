/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Link from '../components/Link';
import Navigation from '../components/Navigation';

export default class extends Component {

  render() {

    return (
      <div>
        <div className="container-fluid col-centered head-wrap">
          <header className="nav-animation-element col-centered">
            <Navigation />
          </header>
          <div className="second-header-element col-centered">
            <div className="slides col-sm-10 col-sm-offset-1">
              <section className="hero">
                <div>
                  <div className="col-xs-11 col-sm-10">
                    <div className="hero-logo hidden-sm hidden-md hidden-lg">
                      <a href="/" onClick={Link.handleClick}>
                        <img src="/images/blockstack-logo.svg"/>
                      </a>
                    </div>
                    <h1 className="hero-head">
                      Blockstack.<br/>The Open Source<br/>Blockchain Community
                    </h1>
                    <p className="lead">
                      Welcoming all developers to join the Blockstack community. Our mission is to create common infrastructure for developing decentralized applications.
                    </p>
                    <p>
                      <a href="http://forum.blockstack.org" target="_blank" className="btn btn-lg btn-primary-hero hidden-xs hidden-sm" role="button" onClick={Link.handleClick}>
                        Join the Blockstack Forum
                      </a>
                      <a href="http://chat.blockstack.org" target="_blank" className="btn btn-lg btn-special-rev" role="button" onClick={Link.handleClick}>
                        Get invited to Slack!
                      </a>
                    </p>
                  </div>
                  <div className="img"></div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <section className="container-fluid sec-hook">
          <div className="bs-docs-featurette col-centered" id="learnmore">
            <div className="col-centered">
              <div className="row col-sm-11 col-md-11 col-centered">
                <div className="col-sm-4 feature-panel">
                  <div className="container wrap-mob-feat">
                    <img src="/images/icon-decentralized.svg" className="img-responsive" alt="Decentralized icon" />
                  </div>
                    <h3>Decentralized</h3>
                    <p className="lead">Applications can be built without central points of failure.</p>
                </div>
                <div className="col-sm-4 feature-panel">
                  <div className="container wrap-mob-feat">
                    <img src="/images/icon-open-source.svg" className="img-responsive" alt="Open source icon" />
                  </div>
                  <h3>Open Source</h3>
                  <p className="lead">Blockstack code is free to inspect, modify, and reuse.</p>
                </div>
                <div className="col-sm-4 feature-panel">
                  <div className="container wrap-mob-feat">
                    <img src="/images/icon-community-globe.svg" className="img-responsive" alt="Community globe icon" />
                  </div>
                  <h3>Community</h3>
                  <p className="lead">We are developers united around a common software stack.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bs-docs-featurette col-centered" id="learnmore">
            <div className="container col-centered">
              <div className="displayed-wrap container col-md-8 col-lg-8 col-centered"><h2 className="displayed">Our mission is to create common infrastructure for developing decentralized applications.</h2></div>
              <div className="row works col-md-10 col-lg-8 col-centered">
                <div className="col-sm-11 feature-panel col-centered">
                    <h3 className="feat-pan">Community Overview</h3>
                    <p className="lead">
                      The Blockstack community is a group of blockchain companies and nonprofits coming together to define and develop a set of software protocols and tools to serve as a common backend for blockchain-powered decentralized applications. We are opening membership to the public, welcoming all developers and companies that are interested in joining the consortium and contributing to Blockstack development.
                    </p>
                </div>
              </div>
              <div className="displayed-wrap container col-md-8 col-lg-8 col-centered">
                <h2 className="displayed">
                  With Blockstack, you will be able to build applications faster and with lower deployment costs.
                </h2>
              </div>
            </div>
          </div>  
        </section>
        <section className="feature-action col-centered">
          <div className="container">
            <div className="row">
              <div className="container col-xs-11 col-centered">
                <hgroup>
                  <h2 className="col-md-8 col-lg-6 col-centered action-title">
                    Build Something Bigger Than Yourself!
                  </h2>
                </hgroup>
                <div className="btn-wrap">
                  <a href="http://chat.blockstack.org" target="_blank" className="btn btn-lg btn-special center-btn" role="button" onClick={Link.handleClick}>
                    Get invited to Slack!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}