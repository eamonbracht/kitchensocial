import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './FooterPage';
// import '../index.css';
class Layout extends Component {
    render() {
    return (
        <div>
            <div>
                <Navigation/>
            </div>
            <div>
                {this.props.children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        );
    }
}

export default Layout;