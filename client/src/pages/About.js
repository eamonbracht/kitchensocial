import React, { Component } from "react";
// import '../index.css';
import Teampage from "../components/Team";
import "../style/about.css";
import Billboard from "../components/billboard";
import oatmeal from "../img/oatmeal.png";
class About extends Component {
  render() {
    return (
        <div>
          <Billboard title = {"About us"}
          subtitle = {"Cooking sucks, we are here to help"}
          backImg = {oatmeal}/>

        <h1 id = "header">The team</h1>
        {/* <p>We are a small team with big plans for future.</p> */}
        {/* <hr /> */}
        <Teampage />
        </div>
    );
  }
}
 
export default About;