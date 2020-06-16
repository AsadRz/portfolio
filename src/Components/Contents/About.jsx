import React, { Component } from "react";
// import Loader from "react-loader-spinner";
// import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ContentCss/about.css";

export default class ContentBody extends Component {
  state = {
    percentage: 75
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid m-5">
          <div className="row mt-3">
            <div className="col-md-12">
              <div class="main_subtitle">HTML5 & CSS Developer</div>
              <div class="main_title">Jeremy Smith</div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 mt-4">
              <h2 className="subhead">Description</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-11">
              <p className="detail_content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vitae sapien porttitor, dignissim quam sit amet,
                aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam
                lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper
                ipsum, at sodales elit odio at velit. Sed a est a quam mattis
                suscipit. Proin et faucibus diam. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Phasellus vitae sapien porttitor,
                dignissim quam sit amet, aliquam lorem. Fusce id ligula non
                risus mollis consectetur. Nam lobortis, erat quis pulvinar
                dignissim, velit ligula ullamcorper ipsum, at sodales elit odio
                at velit. Sed a est a quam mattis suscipit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row mt-5 circle">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12">
                      <svg
                        width="209"
                        height="209"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <circle
                            stroke="rgb(229,230,232)"
                            stroke-width="40"
                            cx="104.5"
                            cy="104.5"
                            r="84.5"
                          />
                          <circle
                            transform="rotate(-90 104.5 104.5)"
                            class="path"
                            stroke="#3C40F8"
                            cx="104.5"
                            cy="104.5"
                            r="84.5"
                          />
                          <text
                            class="value"
                            font-family="Helvetica-Bold, Helvetica"
                            font-size="36"
                            font-weight="bold"
                            fill="#0C0C0C"
                          >
                            <tspan x="72" y="118">
                              75%
                            </tspan>
                          </text>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-11">
                      <div class="loader_title">INTUITION</div>
                      <div class="loader_subtitle">
                        Etiam nec odio vestibulum est.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <svg
                        width="209"
                        height="209"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <circle
                            stroke="rgb(229,230,232)"
                            stroke-width="40"
                            cx="104.5"
                            cy="104.5"
                            r="84.5"
                          />
                          <circle
                            transform="rotate(-90 104.5 104.5)"
                            class="path"
                            stroke="#3C40F8"
                            cx="104.5"
                            cy="104.5"
                            r="84.5"
                          />
                          <text
                            class="value"
                            font-family="Helvetica-Bold, Helvetica"
                            font-size="36"
                            font-weight="bold"
                            fill="#0C0C0C"
                          >
                            <tspan x="72" y="118">
                              75%
                            </tspan>
                          </text>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-11">
                      <div class="loader_title">CREATIVITY</div>
                      <div class="loader_subtitle">
                        Odio vestibulum est mattis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row mt-5 circle">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12">
                      <svg
                        width="209"
                        height="209"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <circle
                            stroke="rgb(229,230,232)"
                            stroke-width="40"
                            cx="104.5"
                            cy="104.5"
                            r="84.5"
                          />
                          <circle
                            transform="rotate(-90 104.5 104.5)"
                            class="path"
                            stroke="#3C40F8"
                            cx="104.5"
                            cy="104.5"
                            r="84.5"
                          />
                          <text
                            class="value"
                            font-family="Helvetica-Bold, Helvetica"
                            font-size="36"
                            font-weight="bold"
                            fill="#0C0C0C"
                          >
                            <tspan x="72" y="118">
                              75%
                            </tspan>
                          </text>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-11">
                      <div class="loader_title">PURE LUCK</div>
                      <div class="loader_subtitle">
                        Vestibulum est mattis effic.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <svg
                        width="209"
                        height="209"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <circle
                            stroke="rgb(229,230,232)"
                            stroke-width="40"
                            cx="104.5"
                            cy="104.5"
                            r="84.5"
                          />
                          <circle
                            transform="rotate(-90 104.5 104.5)"
                            class="path"
                            stroke="#3C40F8"
                            cx="104.5"
                            cy="104.5"
                            r="84.5"
                          />
                          <text
                            class="value"
                            font-family="Helvetica-Bold, Helvetica"
                            font-size="36"
                            font-weight="bold"
                            fill="#0C0C0C"
                          >
                            <tspan x="72" y="118">
                              75%
                            </tspan>
                          </text>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-11">
                      <div class="loader_title">AWESOMENESS</div>
                      <div class="loader_subtitle">
                        Vestibulum est mattis effic.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
