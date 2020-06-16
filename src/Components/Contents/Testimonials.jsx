import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";
// import portFolio from "../../Images/portfolio_4.jpg";
import img1 from "../../Images/test_1.jpg";
import img2 from "../../Images/test_2.jpg";
import img3 from "../../Images/test_3.jpg";

export default class ContentBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid m-5">
          <div className="row m-3">
            <div className="col-md-12">
              <div class="main_subtitle">HTML5 & CSS Developer</div>
              <div class="main_title">Jeremy Smith</div>
            </div>
            <div className="row m-5">
              <Carousel>
                <Carousel.Item>
                  <div class="test_item">
                    <div class="test_title">5* Functionality</div>
                    <div class="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque
                        sit.
                      </p>
                    </div>
                    <div class="test_image">
                      <a href="/">
                        <Image src={img1} fluid />
                      </a>
                    </div>
                    <div class="test_info">
                      <a href="/">Diane Smith</a>
                      <span>Customer</span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div class="test_item">
                    <div class="test_title">5* Functionality</div>
                    <div class="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque
                        sit.
                      </p>
                    </div>
                    <div class="test_image">
                      <a href="/">
                        <Image src={img2} fluid />
                      </a>
                    </div>
                    <div class="test_info">
                      <a href="/">Diane Smith</a>
                      <span>Customer</span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div class="test_item">
                    <div class="test_title">5* Functionality</div>
                    <div class="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque
                        sit.
                      </p>
                    </div>
                    <div class="test_image">
                      <a href="/">
                        <Image src={img3} fluid />
                      </a>
                    </div>
                    <div class="test_info">
                      <a href="/">Diane Smith</a>
                      <span>Customer</span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div class="test_item">
                    <div class="test_title">5* Functionality</div>
                    <div class="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque
                        sit.
                      </p>
                    </div>
                    <div class="test_image">
                      <a href="/">
                        <Image src={img1} fluid />
                      </a>
                    </div>
                    <div class="test_info">
                      <a href="/">Diane Smith</a>
                      <span>Customer</span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div class="test_item">
                    <div class="test_title">5* Functionality</div>
                    <div class="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque
                        sit.
                      </p>
                    </div>
                    <div class="test_image">
                      <a href="/">
                        <Image src={img2} fluid />
                      </a>
                    </div>
                    <div class="test_info">
                      <a href="/">Diane Smith</a>
                      <span>Customer</span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div class="test_item">
                    <div class="test_title">5* Functionality</div>
                    <div class="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque
                        sit.
                      </p>
                    </div>
                    <div class="test_image">
                      <a href="/">
                        <Image src={img3} fluid />
                      </a>
                    </div>
                    <div class="test_info">
                      <a href="/">Diane Smith</a>
                      <span>Customer</span>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
