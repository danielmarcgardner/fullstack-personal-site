import React from 'react';
import './NavBar.css';

const navbar = props => (
  <div id="navbar">
    <div className="navitem">
      Sign In
    </div>
    <div id="navlinks">
      <div className="navitem" onClick={() => props.history.push('/')}>
        Home
      </div>
      <div className="navitem" onClick={() => props.history.push('/projects')}>
        Projects
      </div>
      <div className="navitem" onClick={() => props.history.push('/blog')}>
        Blog
      </div>
    </div>
  </div>
);

export default navbar;
