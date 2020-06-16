import React, { Component } from "react";
import CountUp from "react-countup";
import icon6 from "../../Images/icon_6.png";
import icon7 from "../../Images/icon_7.png";
import icon8 from "../../Images/icon_8.png";
import icon9 from "../../Images/icon_9.png";
import { Image } from "react-bootstrap";
import "../Contents/ContentCss/skills.css";
export default class ContentBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid mt-5">
          <div className="row m-3">
            <div className="col-md-12">
              <div class="main_subtitle">HTML5 & CSS Developer</div>
              <div class="main_title">Jeremy Smith</div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <p className="skill_content">
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
            <div className="col-md-6">
              <p className="skill_content">
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
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="row skill">
                    <div className="col-md-8">Developement</div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 skill_margin">85%</div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div class="progress">
                        <div
                          class="progress-bar bg-info progress-bar-striped progress-bar-animated"
                          style={{
                            width: "85%"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="row skill">
                    <div className="col-md-8">Developement</div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 skill_margin">75%</div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated"
                          style={{
                            width: "80%"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="row skill">
                    <div className="col-md-8">Developement</div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 skill_margin">75%</div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div class="progress">
                        <div
                          class="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                          style={{
                            width: "80%"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="row skill">
                    <div className="col-md-8">CSS</div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 skill_margin">70%</div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div class="progress">
                        <div
                          class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                          style={{
                            width: "70%"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="row skill">
                    <div className="col-md-8">React Js</div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 skill_margin">90%</div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div class="progress">
                        <div
                          class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                          style={{
                            width: "90%"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="row skill">
                    <div className="col-md-8">Node Js</div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 skill_margin">40%</div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div class="progress">
                        <div
                          class="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                          style={{
                            width: "40%"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "5rem", textAlign: "center" }}>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <Image src={icon6} fluid></Image>
                </div>
                <div className="col-md-12 counter">
                  <CountUp start={0} end={14} duration={2} decimal="," />
                </div>
                <div className="col-md-12 text">Years of Experience</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <Image src={icon7} fluid></Image>
                </div>
                <div className="col-md-12 counter">
                  <CountUp start={0} end={1000} duration={2} decimal="," />+
                </div>
                <div className="col-md-12 text">Happy Clients</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <Image src={icon8} fluid></Image>
                </div>
                <div className="col-md-12 counter">
                  <CountUp start={0} end={14} duration={2} decimal="," />k
                </div>
                <div className="col-md-12 text">Followers on Fb</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12">
                  <Image src={icon9} fluid></Image>
                </div>
                <div className="col-md-12 counter">
                  <CountUp start={0} end={732} duration={2} decimal="," />
                </div>
                <div className="col-md-12 text">Finished Projects</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
