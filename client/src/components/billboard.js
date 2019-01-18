import React, { Component } from 'react';
import "../format.css";
import "../style/nav.css"

class billboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            title: this.props.title,
            subtitle: this.props.subtitle,
            backImg: this.props.backImg
        }
    }
    style = {
        backgroundImage: `url(${this.props.backImg})`,
    }
    render() { 
        return (  
            <div className = "billboard" style = {{backgroundImage: `url(${this.state.backImg})`}}>
            <div className = "headingbox" id = "specialheading">
                <h1 className = "heading">{this.state.title}</h1>
                <h2 className = "subheading">{this.state.subtitle}</h2>
                </div>
            </div>

        );
    }

}
 
export default billboard;