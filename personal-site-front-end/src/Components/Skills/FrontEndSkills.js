import React from 'react';
import './Skills.css';

const FrontEndSkills = () => (
  <div className="skillscategory">
    <h1 className="skillsheader"> Front End Skills </h1>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/js.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/react.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/redux.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/html5.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/css3.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/reactrouter.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/semantic.png')} />
    </div>
    <div className="skilldiv">
      <img className="skillimage" src={require('../../Images/materialize.png')} />
    </div>
  </div>
);

export default FrontEndSkills;
