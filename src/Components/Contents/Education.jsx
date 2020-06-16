import React, { Component } from "react";
import mainDegree from "../../Images/edu_1.png";
import secondDegree from "../../Images/edu_2.png";
import firstDegree from "../../Images/edu_3.png";
export default class ContentBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid m-5">
          <div className="row mt-3">
            <div className="col-md-12">
              <div class="main_subtitle">What I am good at</div>
              <div class="main_title">My Education</div>
            </div>
          </div>
          <div className="row education">
            <div className="col-md-2">
              <div class="edu_year">2018</div>
            </div>
            <div className="col-md-2">
              <div class="edu_image">
                <img src={mainDegree} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div class="edu_content">
                <div class="edu_title">University of Colorado</div>
                <div class="edu_subtitle">Developer Diploma PhD</div>
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
            <div className="col-md-2">
              <div class="edu_year">2012</div>
            </div>
            <div className="col-md-2">
              <div class="edu_image">
                <img src={secondDegree} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div class="edu_content">
                <div class="edu_title">Graphic School</div>
                <div class="edu_subtitle">Graphic Design Course</div>

                <div class="edu_text">
                  <p>
                    Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    vitae sapien porttitor, dignissim quam sit ame. Proin vitae
                    tortor nec risus tristique efficitur. Aliquam luctus est
                    urna, id aliquam orci tempus sed. Aenean sit amet leo id
                    enim dapibus eleifend. Phasellus ut erat dapibus, tempor
                    sapien non, porta urna.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row education">
            <div className="col-md-2">
              <div class="edu_year">2008</div>
            </div>
            <div className="col-md-2">
              <div class="edu_image">
                <img src={firstDegree} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div class="edu_content">
                <div class="edu_title">Colorado High School</div>
                <div class="edu_subtitle">Bachelor Degree - Developer</div>

                <div class="edu_text">
                  <p>
                    Consectetur adipiscing elit. Phasellus vitae sapien
                    porttitor, dignissim quam sit ame. Proin vitae tortor nec
                    risus tristique efficitur. Aliquam luctus est urna, id
                    aliquam orci tempus sed. Aenean sit amet leo id enim dapibus
                    eleifend. Phasellus ut erat dapibus, tempor sapien non,
                    porta urna.
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
