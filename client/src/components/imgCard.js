import React, { Component } from 'react';
import "../style/about.css";

class imgCard extends Component {
    constructor(props) {
        super(props);
        this.state = { names: this.props.names }
    }
    styles = {
        // backgroundImage: url(${this.state.names})
}
    render() { 
        return ( <div className = "img_card" style = {{backgroundImage: `url(${this.state.names})`}}
        >
        {/* <img src = {this.props.names} alt = "pic"/> */}
        </div>
        );
    }
}
 
export default imgCard;