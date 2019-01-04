import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./jumbo.module.css";

const Example = (props) => {
  return (
    <div>
      <Jumbotron className = {styles.home}>
        <Container fluid>
        <div class = "jumbo_text_container">
          {/* <h1 className="display-3"><mark style={{backgroundColor: '#fce300'}}>the plan?</mark></h1> */}
          <h1 className="display-3">the plan?</h1>
          <div id = "jumbo_container">
          {/* <p id = "jumbo_plan"> <mark id = "modify" style={{backgroundColor: '#fce300'}}>Redefine cooking as a social experience that can be enjoyed without worry of inconvenience and inability.</mark></p> */}
          <p id = "jumbo_plan"> <mark id = "modify" style={{backgroundColor: '#fce300'}}>Redefine cooking </mark></p>
          {/* <p id = "jumbo_plan">Redefine cooking</p> */}
          <a href = "/about"> <div class="back">
          <div class="button_base b07_3d_double_roll">
        <div>LEARM MORE</div>
        <div>LEARM MORE</div>
        <div>LEARM MORE</div>
        <div>LEARM MORE</div>
        </div>
        </div>
        </a>
          </div>
          </div>
          {/* <p className="lead">Hello</p> */}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;