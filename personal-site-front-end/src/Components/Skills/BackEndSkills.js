import React from 'react';
import './Skills.css';

const BackEndSkills = () => (
  <div className="skillscategory">
    <h1 className="skillsheader"> Back End Skills </h1>
    <div className="skilldiv">
      <img className="skillimage" alt="Node.js" src={require('../../Images/node.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Knex.js" src={require('../../Images/knex.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Bookshelf.js" src={require('../../Images/bookshelf.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="PostgreSQL" src={require('../../Images/postgresql.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Swagger.js" src={require('../../Images/swagger.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Json Web Token" src={require('../../Images/jwt.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Oauth" src={require('../../Images/oauth.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Express.js" src={require('../../Images/express.png')} />
    </div>
  </div>
);

export default BackEndSkills;
