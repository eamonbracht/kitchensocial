import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from "./jumbo.module.css";

const Example = (props) => {
  return (
    <div>
      <Jumbotron className = {styles.survey} >
        <Container fluid>
          {/* <h1 className="display-3"><mark style={{backgroundColor: '#fce300'}}>the plan?</mark></h1> */}
          <h1 className="display-3"><mark id = "modify" style={{backgroundColor: '#fce300'}}>Tell us about yourself</mark></h1>
          <div id = "jumbo_container">
          <p id = "jumbo_survey"> Your privacy is our priority. Your responses are completely confidential.</p>
          {/* <p id = "jumbo_survey"> <mark id = "modify" style={{backgroundColor: '#fce300'}}>Your privacy is our priority. Your responses are completely confidential.</mark></p> */}
          {/* <p id = "jumbo_plan">Redefine cooking</p> */}


          </div>
          {/* <p className="lead">Hello</p> */}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;