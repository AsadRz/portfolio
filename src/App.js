import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from './Components/SideBar';
import Content from './Components/ContentBody';

export default class App extends Component
{
  state = {
    value: "",
    isActive: false
  }
  screenNo = page =>
  {
    console.log(page);
    this.setState({ value: page });
    this.setState({ isActive: true });
    return this.value;
  }
  readTextFile = file =>
  {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () =>
    {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          var allText = rawFile.responseText;
          console.log("allText: ", allText);
          this.setState({
            fundData: allText
          }, () => { console.log(this.state.fundData); });
        }
      }
    };
    rawFile.send(null);
  };
  reading = () =>
  {
    this.readTextFile('../text/abc.txt');

  }
  render()
  {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <Header screenNo={this.screenNo} isActive={this.state.isActive} value={this.state.value} />
          </div>
          <div className="row">
            <div className="col-md-4">
              <SideBar />
            </div>
            <div className="col-md-8" style={{ backgroundColor: "#f5f0f0", marginLeft: "-15px" }}> {console.log(this.number)}
              <Content value={this.state.value} />
            </div>
          </div>
          <div><button onClick={this.reading}></button></div>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
