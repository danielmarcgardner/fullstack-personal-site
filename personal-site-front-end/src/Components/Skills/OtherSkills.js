import React from 'react';
import './Skills.css';

const OtherSkills = () => (
  <div className="skillscategory">
    <h1 className="skillsheader"> Testing & Other Skills </h1>
    <div className="skilldiv">
      <img className="skillimage" alt="Jest" src={require('../../Images/jest.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Mocha" src={require('../../Images/mocha.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Chai" src={require('../../Images/chai.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Super Test" src={require('../../Images/supertest.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Git" src={require('../../Images/git.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Github" src={require('../../Images/github.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Heroku" src={require('../../Images/heroku.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="NPM" src={require('../../Images/npm.png')} />
    </div>
  </div>
);

export default OtherSkills;
