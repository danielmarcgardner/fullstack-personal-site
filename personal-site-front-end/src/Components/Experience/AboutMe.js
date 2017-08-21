import React from 'react';
import './Experience.css';

const AboutMe = () => (
  <div>
    <div className="aboutmediv">
      <h3 className="experiencesubheader">About Me</h3>
      <ul className="ulexperience">
        <li>My passion has always been building things</li>
        <li>I am a Bay Area Native</li>
        <li>I am Full Stack Developer with a specialty in React</li>
        <li>I am Bulldog Owner and Lover</li>
        <li>I have a beautiful girlfriend... she&apos;s brilliant</li>
      </ul>
    </div>
    <div className="aboutmediv">
      <h3 className="experiencesubheader">Experience</h3>
      <ul className="ulexperience">
        <li>Web Developer Resident <a href="https://www.galvanize.com/san-francisco">Galvanize</a></li>
        <li>Software Engineering Intern <a href="http://home-slice.io/">Home Slice</a></li>
        <li>Development/Events Associate <a href="https://www.jfcs.org/">JFCS</a></li>
        <li>Manager of Promotions and Fan Experience <a href="http://usfdons.com/">USF Athletics</a></li>
        <li>Coordinator, Development Department <a href="https://alumni.berkeley.edu/">Cal Alumni Association</a> </li>
        <li>Team Operations Intern <a href="http://game.orangebowl.org/">Orange Bowl Committee</a></li>
        <li>Basketball Operations Intern <a href="http://www.nba.com/wizards/">Washington Wizards</a></li>
      </ul>
    </div>
    <div className="aboutmediv">
      <h3 className="experiencesubheader">Education</h3>
      <ul className="ulexperience">
        <li>Web Development Immersive Program <a href="https://www.galvanize.com/san-francisco">Galvanize</a></li>
        <li>MA Sports Management <a href="https://www.usfca.edu/">University of San Francisco</a></li>
        <li>BBA Sport, Event, and Hospitality Management <a href="https://www.gwu.edu/">George Washington University</a></li>
      </ul>
    </div>
  </div>
);

export default AboutMe;
