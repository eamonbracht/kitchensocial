import React, { Component } from "react";
import { Icons } from "mdbreact";
import "../style/about.css";
import eamon from "../img/eamon.png";
import emily from "../img/emily.png";

import ImgCard from "./imgCard";
class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: this.props.names,
      school: this.props.school,
      rolez: this.props.rolez
    };
  }

  render() {
    return (
      <div className="flexbox">
        <div className="person_card">
          <ImgCard names={this.setBackgroundImg()} />
          <div className="info_section">
            <h3>{this.state.names}</h3>
            <h4 id="role">{this.state.rolez}</h4>
            <h4 id="school">{this.state.school}</h4>
            <div className = "sociallist">
              <ul class="list-unstyled mb-0">
                <a class="p-2 fa-lg fb-ic">
                  <i class="fab fa-linkedin-in blue-text" />
                </a>
                {/* <i class="fab fa-linkedin"></i> */}

                <a class="p-2 fa-lg tw-ic">
                  <i class="fab fa-github blue-text"> </i>
                </a>

                <a class="p-2 fa-lg ins-ic">
                  <i class="fab fa-instagram blue-text"> </i>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  setBackgroundImg() {
    return this.state.names === "Eamon Bracht" ? eamon : emily;
  }
}

export default Person;
