import React from "react";
import "../style/nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Navigation extends React.Component {
  navbarstyle = {
    boxShadow: "none",
    maxWidth: 1000,
    margin: "auto",
    backgroundColor: 'transparent',
    fontFamily: "'Courier New', Courier, monospace"
    // backgroundImage: "url(../img/carrots.png)"
  };
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false

    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
        <Navbar color="inverse" light expand="md" style={this.navbarstyle} className= "transbar">
          <NavbarBrand href="/">Kitchen Social</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink id="hoveritem" href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="hoveritem" href="/About">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="hoveritem" href="/Survey">
                  Survey
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
export default Navigation;
