import React from 'react';
// import '../index.css';
import "../format.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
class Navigation extends React.Component {
		constructor(props) {
		  super(props);
	  
		  this.toggle = this.toggle.bind(this);
		  this.state = {
			isOpen: false
		  };
		}s
		toggle() {
		  this.setState({
			isOpen: !this.state.isOpen
		  });
		}
	render() {
		return(
			<div>
                <Navbar color="light" light expand="md">					
                    <NavbarBrand href="/">Kitchen Social</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/">HOME</NavLink>
							</NavItem>
                            <NavItem>
								<NavLink href="/About">ABOUT</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/Survey">SURVEY</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
export default Navigation;