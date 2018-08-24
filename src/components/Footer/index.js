import React from "react";
import "./style.css";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>&copy; 2018 Leen's Blog, All rights reserved!</p>
        </div>
        <div className="col-md-6 social-media">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
