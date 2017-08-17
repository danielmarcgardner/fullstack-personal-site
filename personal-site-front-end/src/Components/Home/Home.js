import React from 'react';
import HeroDiv from '../HeroDiv/HeroDiv';
import SkillsHero from '../Skills/SkillsHero';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

const Home = () => (
  <div>
    <HeroDiv />
    <Experience />
    <SkillsHero />
    <Contact />
  </div>
);

export default Home;
