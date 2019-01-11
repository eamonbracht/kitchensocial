import React, { Component } from 'react';
import Footer from './FooterPage';
import Navigation from './Navigation';
// import '../index.css';
class Layout extends Component {
    state = {
    };
    render() {
    return (
        <div>

                <Navigation />

            <div>
                {this.props.children}
            </div>

                <Footer/>

        </div>
        );
    }
}

export default Layout;