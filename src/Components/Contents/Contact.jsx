import React, { Component } from "react";
// import { ResponsiveEmbed } from "react-bootstrap";
import { Form, Row, Col, Button } from "react-bootstrap";
export default class ContentBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid m-5">
          <div className="row mt-3">
            <div className="col-md-12">
              <div class="main_subtitle">What Client Say</div>
              <div class="main_title">Contact Me</div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-xs-12 mt-4">
              <p className="detail_content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vitae sapien porttitor, dignissim quam sit ame. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                vitae sapien.
              </p>
              <div class="contact_form_container">
                <Form>
                  <Form.Group as={Row} controlId="formHorizontalNames">
                    <Form.Label column sm={2}>
                      Name
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Name" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Email
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalSubject">
                    <Form.Label column sm={2}>
                      Subject
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Subject" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formHorizontalMessage">
                    <Form.Label column sm={2}>
                      Message
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="textarea"
                        placeholder="Enter Your Message Here.."
                      />
                    </Col>
                  </Form.Group>
                  <Button type="submit" className="contact_button">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13282.345685867218!2d73.05233364999998!3d33.667876650000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1571125763180!5m2!1sen!2s"
                height="450"
                frameBorder="0"
                style={{ border: "0" }}
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
