import React from 'react';
import './NavBar.css';

const navbar = props => (
  <div id="navbar">
    <div className="navitem" onClick={() => props.history.push('/signin')}>
      Sign In
    </div>
    <div className="navitem" onClick={() => props.history.push('/signup')}>
      Sign Up
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
