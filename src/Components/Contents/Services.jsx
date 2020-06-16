import React, { Component } from "react";
import icon10 from "../../Images/icon_10.png";
import icon11 from "../../Images/icon_11.png";
import icon12 from "../../Images/icon_12.png";
import icon13 from "../../Images/icon_13.png";
import icon14 from "../../Images/icon_14.png";
import icon15 from "../../Images/icon_15.png";
import { Image } from "react-bootstrap";

export default class ContentBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid m-5">
          <div className="row m-3">
            <div className="col-md-12">
              <div class="main_subtitle">What I am good at</div>
              <div class="main_title">My Services</div>
            </div>
          </div>
          <div className="row services_content">
            <div className="col-md-1">
              <Image src={icon10} fluid></Image>
            </div>
            <div
              className="col-md-4 "
              style={{ marginTop: "6px", marginLeft: "-21px" }}
            >
              <div className="row">
                <div className="col-md-12 service_title">
                  Fast Coding Services
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 service_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vitae sapien porttitor, dignissim quam sit ame.
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <Image src={icon11} fluid></Image>
            </div>
            <div
              className="col-md-4 "
              style={{ marginTop: "6px", marginLeft: "-21px" }}
            >
              <div className="row">
                <div className="col-md-12 service_title">Documentations</div>
              </div>
              <div className="row">
                <div className="col-md-12 service_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vitae sapien porttitor, dignissim quam sit ame.
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-md-1">
              <Image src={icon12} fluid></Image>
            </div>
            <div
              className="col-md-4 "
              style={{ marginTop: "6px", marginLeft: "-21px" }}
            >
              <div className="row">
                <div className="col-md-12 service_title">
                  Online presentations
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 service_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vitae sapien porttitor, dignissim quam sit ame.
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <Image src={icon13} fluid></Image>
            </div>
            <div
              className="col-md-4 "
              style={{ marginTop: "6px", marginLeft: "-21px" }}
            >
              <div className="row">
                <div className="col-md-12 service_title">Online shops</div>
              </div>
              <div className="row">
                <div className="col-md-12 service_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vitae sapien porttitor, dignissim quam sit ame.
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-md-1">
              <Image src={icon14} fluid></Image>
            </div>
            <div
              className="col-md-4 "
              style={{ marginTop: "6px", marginLeft: "-21px" }}
            >
              <div className="row">
                <div className="col-md-12 service_title">Video footages</div>
              </div>
              <div className="row">
                <div className="col-md-12 service_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vitae sapien porttitor, dignissim quam sit ame.
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <Image src={icon15} fluid></Image>
            </div>
            <div
              className="col-md-4 "
              style={{ marginTop: "6px", marginLeft: "-21px" }}
            >
              <div className="row">
                <div className="col-md-12 service_title">Stock photos</div>
              </div>
              <div className="row">
                <div className="col-md-12 service_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vitae sapien porttitor, dignissim quam sit ame.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" style={{ marginTop: "33px" }}>
              <div class="services_button">
                <a href="/">Ask for a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
