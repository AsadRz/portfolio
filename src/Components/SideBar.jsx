import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/ComponentCss/sidebar.css";
import image from "../Images/smith.jpg";
import icon1 from "../Images/icon_1.png";
import icon2 from "../Images/icon_2.png";
import icon3 from "../Images/icon_3.png";
import icon4 from "../Images/icon_4.png";
import icon5 from "../Images/icon_5.png";
import Image from "react-bootstrap/Image";

export default function SideBar() {
  return (
    <React.Fragment>
      <div className="general_info" style={{ backgroundColor: "#100f3a" }}>
        <div>
          <Image src={image} fluid />
        </div>
        <div className="general_info_content">
          <div className="general_info_title">General Information</div>
          <ul>
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center">
                <img src={icon1} alt="" />
              </div>
              <div className="general_info_text">
                Name: <span>Asad Ullah Riaz</span>
              </div>
            </li>
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center">
                <i className="fa fa-heart" style={{ color: "red" }}></i>
              </div>
              <div className="general_info_text">
                Location: <span>Islamabad,Pakistan</span>
              </div>
            </li>
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center">
                <img src={icon2} alt="" />
              </div>
              <div className="general_info_text">
                Date of Birth: <span>Sept 10, 1994</span>
              </div>
            </li>
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center">
                <img src={icon3} alt="" />
              </div>
              <div className="general_info_text">
                <a href="mailto:asadullah.riaz@discretelogix.com?subject=Job_Inquiry">
                  asadullahriaz7@gmail.com
                </a>
              </div>
            </li>
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center">
                <img src={icon4} alt="" />
              </div>
              <div className="general_info_text">+92 331-5086692</div>
            </li>
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center">
                <img src={icon5} alt="" />
              </div>
              <div className="general_info_text">
                <a href="mailto:contact@linque.com">www.asadullahriaz.com</a>
              </div>
            </li>
          </ul>
          <div className="social_container">
            <ul className="d-flex flex-row align-items-start justify-content-start">
              <li>
                <a href="/">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
