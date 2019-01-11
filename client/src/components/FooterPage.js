import React from "react";
import "../style/nav.css";

class FooterPage extends React.Component {
  render() {
    return (
      <footer class="site-footer">
        <div class="foot">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Survey">Survey</a>
            </li>
          </ul>
        </div>
        <div class="contactinfo">
          <p>
            Kitchen Social | Chicago, IL 60612</p>
        </div>
        <div class="makermark">
          <p class="love">
            Made with <i className="fa fa-heart-o" style = {{color: 'red'}}/> in Chicago
          </p>
        </div>
      </footer>
    );
  }
}

export default FooterPage;
