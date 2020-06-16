import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "../Components/ComponentCss/header.css";
// import { NavDropdown } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import { FormControl } from "react-bootstrap";
// import { Button } from "react-bootstrap";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.collapseable = React.createRef();
  }

  render() {
    return (
      <Navbar className="mx-3" expand="sm">
        <Navbar.Brand href="#home">
          <div className="logo">
            Person<span>.</span>CV
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ backgroundColor: "#100f3a" }}
        >
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => {
                this.props.screenNo("about");
              }}
              style={{ color: "#ffffff" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                this.props.screenNo("contact");
              }}
              style={{ color: "#ffffff" }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                this.props.screenNo("education");
              }}
              style={{ color: "#ffffff" }}
            >
              Education
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                this.props.screenNo("experience");
              }}
              style={{ color: "#ffffff" }}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                this.props.screenNo("portfolio");
              }}
              style={{ color: "#ffffff" }}
            >
              PortFolio
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                this.props.screenNo("services");
              }}
              style={{ color: "#ffffff" }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                this.props.screenNo("skills");
              }}
              style={{ color: "#ffffff" }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                this.props.screenNo("testimonials");
              }}
              style={{ color: "#ffffff" }}
            >
              Testimonials
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
