import React from 'react';
import { shallow } from 'enzyme';
import SkillsHero from '../Components/Skills/SkillsHero';
import FrontEndSkills from '../Components/Skills/FrontEndSkills';
import BackEndSkills from '../Components/Skills/BackEndSkills';
import OtherSkills from '../Components/Skills/OtherSkills';

const skills = shallow(<SkillsHero />);
const frontskills = shallow(<FrontEndSkills />);
const backskills = shallow(<BackEndSkills />);
const otherskills = shallow(<OtherSkills />);

describe('Skills', () => {
  it('SkillsHero renders', () => {
    expect(skills).toMatchSnapshot();
  });
  it('FrontEndSkills renders', () => {
    expect(frontskills).toMatchSnapshot();
  });
  it('BackEndSkills renders', () => {
    expect(backskills).toMatchSnapshot();
  });
  it('OtherSkills renders', () => {
    expect(otherskills).toMatchSnapshot();
  });
  it('SkillsHero has an id skillsmainheader', () => {
    expect(skills.find('#skillsmainheader').length).toEqual(1);
  });
  it('FrontEndSkills has 8 skilldivs and skill images', () => {
    expect(frontskills.find('.skilldiv').length).toEqual(8);
    expect(frontskills.find('.skillimage').length).toEqual(8);
  });
  it('BackEndSkills has 8 skilldivs and skill images', () => {
    expect(backskills.find('.skilldiv').length).toEqual(8);
    expect(backskills.find('.skillimage').length).toEqual(8);
  });
  it('OtherSkills has 8 skilldivs and skill images', () => {
    expect(otherskills.find('.skilldiv').length).toEqual(8);
    expect(otherskills.find('.skillimage').length).toEqual(8);
  });
});
