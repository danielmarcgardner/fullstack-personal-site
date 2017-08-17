import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Components/Home/Home';

const component = shallow(<Home />);

describe('Home', () => {
  it('Renders', () => {
    expect(component).toMatchSnapshot();
  });
  it('Has HeroDiv', () => {
    expect(component.find('HeroDiv').length).toEqual(1);
  });
  it('Has SkillsHero', () => {
    expect(component.find('SkillsHero').length).toEqual(1);
  });
  it('Has Experience', () => {
    expect(component.find('Experience').length).toEqual(1);
  });
  it('Has Contact', () => {
    expect(component.find('Contact').length).toEqual(1);
  });
});
