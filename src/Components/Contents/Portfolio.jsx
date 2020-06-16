import React, { Component } from "react";
// import { Tabs, Tab } from "react-bootstrap";
import All from "../Contents/Portfolio/All";
import Design from "../Contents/Portfolio/Design";
import PhotoGraphy from "../Contents/Portfolio/PhotoGraphy";
import Brand from "../Contents/Portfolio/Brand";
import "../ComponentCss/portfolio.css";
export default class ContentBody extends Component {
  state = { value: "" };
  checkScreen = value => {
    this.setState({ value });
    this.screen();
  };
  screen = () => {
    switch (this.state.value) {
      case "all": {
        return <All />;
      }
      case "design": {
        return <Design />;
      }
      case "photo": {
        return <PhotoGraphy />;
      }
      case "brand": {
        return <Brand />;
      }
      default: {
        return <All />;
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid m-5">
          <div className="row m-3">
            <div className="col-md-12">
              <div class="main_subtitle">HTML5 & CSS Developer</div>
              <div class="main_title">Jeremy Smith</div>
            </div>
          </div>
          <div className="row m-5">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-1">
                  <p
                    onClick={() => {
                      this.checkScreen("all");
                    }}
                    className="portfolio_category"
                  >
                    All
                  </p>
                </div>
                <div className="col-md-1">
                  <p
                    onClick={() => {
                      this.checkScreen("design");
                    }}
                    className="portfolio_category"
                  >
                    Design
                  </p>
                </div>
                <div className="col-md-2">
                  <p
                    onClick={() => {
                      this.checkScreen("photo");
                    }}
                    className="portfolio_category"
                  >
                    PhotoGraphy
                  </p>
                </div>
                <div className="col-md-3">
                  <p
                    onClick={() => {
                      this.checkScreen("brand");
                    }}
                    className="portfolio_category"
                  >
                    Brand Identity
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">{<this.screen />}</div>
        </div>
      </React.Fragment>
    );
  }
}
