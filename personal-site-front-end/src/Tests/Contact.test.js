import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Contact from '../Components/Contact/Contact';

const component = shallow(<Contact />);

describe('Contact Hero Div', () => {
  it('Renders', () => {
    expect(component).toMatchSnapshot();
  });
  it('Has 4 contactdivs', () => {
    expect(component.find('.contactdivs').length).toEqual(4);
  });
  it('Has links to the correct places', () => {
    expect(component.find('a').nodes[0].props.href).toEqual('mailto:daniel.marc.gardner@gmail.com');
    expect(component.find('a').nodes[1].props.href).toEqual('https://github.com/danielmarcgardner');
    expect(component.find('a').nodes[2].props.href).toEqual('https://www.linkedin.com/in/danielmarcgardner/');
    expect(component.find('a').nodes[3].props.href).toEqual('https://twitter.com/danielmgardner1');
  });
});
