import React from 'react';
import renderIf from 'render-if';
import './NavBar.css';

const navbar = ({ user, history, signOutUser }) => (
  <div id="navbar">
    {renderIf(user.loggedIn === false)(
      <div className="navsignin">
        <div className="navitem" onClick={() => history.push('/signin')}>
          Sign In
        </div>
        <div className="navitem" onClick={() => history.push('/signup')}>
          Sign Up
        </div>
      </div>,
    )}
    {
      renderIf(user.loggedIn === true)(
        <div className="navsignin">
          <div id="usernamedisplay" onClick={() => signOutUser()}>
            {`${user.name}`} <br />
            Sign Out
          </div>
        </div>,
      )
    }
    <div id="navlinks">
      <div className="navitem" onClick={() => history.push('/')}>
        Home
      </div>
      <div className="navitem" onClick={() => history.push('/projects')}>
        Projects
      </div>
      <div className="navitem" onClick={() => history.push('/blog')}>
        Blog
      </div>
    </div>
  </div>
);

export default navbar;
