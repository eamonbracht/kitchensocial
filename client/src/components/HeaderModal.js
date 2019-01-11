import React, { Component } from "react";
import "../style/nav.css";
// import Navigation from "./Navigation";

class HeaderModal extends Component {
  state = {
  };
  styles = {
    // backgroundColor: "#FF0000"
    
  };
  render() {
    return (
      <header className="header-modal">
      {/* <Navigation /> */}
        <div className = "headingbox">
        <h1 className="heading">
          The <span className="underline--magical">Plan?</span> 
        </h1>
        <h2 className="subheading">
          {/* Redefine{" "} */}
          <span className="underline--magical">Redefine Cooking</span> for
          for the modern era
        </h2>
        </div>
      </header>

    );
  }

}

export default HeaderModal;
