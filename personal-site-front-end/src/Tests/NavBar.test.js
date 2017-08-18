import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../Components/NavBar/NavBar';

const component = shallow(<NavBar />);

describe('NavBar', () => {
  it('Renders', () => {
    expect(component).toMatchSnapshot();
  });
  it('Has 5 navitems', () => {
    expect(component.find('.navitem').length).toEqual(5);
  });
});
