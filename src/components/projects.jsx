import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-1.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">SimLead</a>
                      </h3>
                      <span>Website</span>
                      {/* <p className="icon">
												<span><a href="javascript:;"><i className="icon-share3" /></a></span>
												<span><a href="javascript:;"><i className="icon-eye" /> 100</a></span>
												<span><a href="javascript:;"><i className="icon-heart" /> 49</a></span>
											</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-2.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Kollel</a>
                      </h3>
                      <span>Scheduler Web App</span>
                      {/* <p className="icon">
												<span><a href="javascript:;"><i className="icon-share3" /></a></span>
												<span><a href="javascript:;"><i className="icon-eye" /> 100</a></span>
												<span><a href="javascript:;"><i className="icon-heart" /> 49</a></span>
											</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-3.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">MyBerkey</a>
                      </h3>
                      <span>E-Commerce Web App</span>
                      {/* <p className="icon">
												<span><a href="javascript:;"><i className="icon-share3" /></a></span>
												<span><a href="javascript:;"><i className="icon-eye" /> 100</a></span>
												<span><a href="javascript:;"><i className="icon-heart" /> 49</a></span>
											</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-4.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Optic Force</a>
                      </h3>
                      <span>E-Commerce Web App</span>
                      {/* <p className="icon">
												<span><a href="javascript:;"><i className="icon-share3" /></a></span>
												<span><a href="javascript:;"><i className="icon-eye" /> 100</a></span>
												<span><a href="javascript:;"><i className="icon-heart" /> 49</a></span>
											</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-5.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Trybe</a>
                      </h3>
                      <span>Website</span>
                      {/* <p className="icon">
												<span><a href="javascript:;"><i className="icon-share3" /></a></span>
												<span><a href="javascript:;"><i className="icon-eye" /> 100</a></span>
												<span><a href="javascript:;"><i className="icon-heart" /> 49</a></span>
											</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-6.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">ZipCoin</a>
                      </h3>
                      <span>Website</span>
                      {/* <p className="icon">
												<span><a href="javascript:;"><i className="icon-share3" /></a></span>
												<span><a href="javascript:;"><i className="icon-eye" /> 100</a></span>
												<span><a href="javascript:;"><i className="icon-heart" /> 49</a></span>
											</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-12 animate-box">
                <p>
                  <a
                    href="javascript:;"
                    className="btn btn-primary btn-lg btn-load-more"
                  >
                    Load more <i className="icon-reload" />
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    );
  }
}
