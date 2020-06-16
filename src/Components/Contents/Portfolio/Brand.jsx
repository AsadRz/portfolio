import React from "react";
import img1 from "../../../Images/portfolio_6.jpg";
import img2 from "../../../Images/portfolio_5.jpg";
import { Image } from "react-bootstrap";

export default function Brand() {
  return (
    <React.Fragment>
      <div className="col-md-1"></div>
      <div className="col-md-4">
        <div class="grid-item portfolio_item p_brand">
          <Image src={img1} fluid />
          <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
            <div class="portfolio_item_title">Brand Identity</div>
            <div class="portfolio_item_link">
              <a href="/">See More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-4">
        <div class="grid-item portfolio_item p_brand">
          <Image src={img2} fluid />
          <div class="portfolio_item_content d-flex flex-column align-items-center justify-content-center">
            <div class="portfolio_item_title">Brand Identity</div>
            <div class="portfolio_item_link">
              <a href="/">See More</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
