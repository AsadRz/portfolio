import React, { Component } from "react";
import About from "./Contents/About";
import Contact from "./Contents/Contact";
import Education from "./Contents/Education";
import Experience from "./Contents/Experience";
import Portfolio from "./Contents/Portfolio";
import Services from "./Contents/Services";
import Skills from "./Contents/Skills";
import Testimonials from "./Contents/Testimonials";

export default class ContentBody extends Component {
  screen = () => {
    switch (this.props.value) {
      case "about": {
        return <About />;
      }
      case "contact": {
        return <Contact />;
      }
      case "education": {
        return <Education />;
      }
      case "experience": {
        return <Experience />;
      }
      case "portfolio": {
        return <Portfolio />;
      }
      case "services": {
        return <Services />;
      }
      case "skills": {
        return <Skills />;
      }
      case "testimonials": {
        return <Testimonials />;
      }
      default: {
        return <About />;
      }
    }
  };
  render() {
    return <React.Fragment>{<this.screen />}</React.Fragment>;
  }
}
