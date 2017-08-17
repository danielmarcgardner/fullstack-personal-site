import React from 'react';
import './Footer.css';

const Footer = props => (
  <div id="footer">
    <div id="copyright">
      &copy; Daniel Gardner 2017
    </div>
    <div id="footerlinks">
      <div className="navitem" onClick={() => props.history.push('/signup')}>
      Sign Up
    </div>
      <div className="navitem" onClick={() => props.history.push('/signin')}>
      Sign In
    </div>
    </div>
  </div>
);

export default Footer;
