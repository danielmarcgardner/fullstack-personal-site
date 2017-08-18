import React from 'react';
import './Skills.css';

const FrontEndSkills = () => (
  <div className="skillscategory">
    <h1 className="skillsheader"> Front End Skills </h1>
    <div className="skilldiv">
      <img className="skillimage" alt="JavaScript" src={require('../../Images/js.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="React" src={require('../../Images/react.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Redux" src={require('../../Images/redux.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="HTML5" src={require('../../Images/html5.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="CSS3" src={require('../../Images/css3.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="React Router" src={require('../../Images/reactrouter.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Semantic UI" src={require('../../Images/semantic.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" alt="Materialize" src={require('../../Images/materialize.png')} />
    </div>
  </div>
);

export default FrontEndSkills;
