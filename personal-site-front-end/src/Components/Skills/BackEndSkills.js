import React from 'react';
import './Skills.css';

const BackEndSkills = () => (
  <div className="skillscategory">
    <h1 className="skillsheader"> Back End Skills </h1>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/node.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/knex.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/bookshelf.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/postgresql.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/swagger.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/jwt.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/oauth.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/express.png')} />
    </div>
  </div>
);

export default BackEndSkills;
