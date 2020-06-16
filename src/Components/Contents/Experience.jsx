import React, { Component } from "react";

export default class ContentBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid m-5">
          <div className="row mt-3">
            <div className="col-md-12">
              <div class="main_subtitle">What I am good at</div>
              <div class="main_title">My Experience</div>
            </div>
          </div>
          <div className="row education">
            <div className="col-md-3">
              <div class="edu_year">2016-Present</div>
            </div>
            <div className="col-md-8">
              <div class="edu_content">
                <div class="edu_title">Senior Developer</div>
                <div class="edu_subtitle">Company INC</div>
                <div class="edu_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus vitae sapien porttitor, dignissim quam sit ame.
                    Proin vitae tortor nec risus tristique efficitur. Aliquam
                    luctus est urna, id aliquam orci tempus sed. Aenean sit amet
                    leo id enim dapibus eleifend. Phasellus ut erat dapibus,
                    tempor sapien non, porta urna.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row education">
            <div className="col-md-3">
              <div class="edu_year">2014-2016</div>
            </div>
            <div className="col-md-8">
              <div class="edu_content">
                <div class="edu_title">Junior Developer</div>
                <div class="edu_subtitle">Company INC</div>
                <div class="edu_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus vitae sapien porttitor, dignissim quam sit ame.
                    Proin vitae tortor nec risus tristique efficitur. Aliquam
                    luctus est urna, id aliquam orci tempus sed. Aenean sit amet
                    leo id enim dapibus eleifend. Phasellus ut erat dapibus,
                    tempor sapien non, porta urna.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row education">
            <div className="col-md-3">
              <div class="edu_year">2012-2014</div>
            </div>
            <div className="col-md-8">
              <div class="edu_content">
                <div class="edu_title">Entry Level Developer</div>
                <div class="edu_subtitle">Company INC</div>
                <div class="edu_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus vitae sapien porttitor, dignissim quam sit ame.
                    Proin vitae tortor nec risus tristique efficitur. Aliquam
                    luctus est urna, id aliquam orci tempus sed. Aenean sit amet
                    leo id enim dapibus eleifend. Phasellus ut erat dapibus,
                    tempor sapien non, porta urna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
