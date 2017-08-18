import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Components/Footer/Footer';

const component = shallow(<Footer />);

describe('Footer', () => {
  it('Renders', () => {
    expect(component).toMatchSnapshot();
  });
  it('Has a copyright', () => {
    expect(component.find('#copyright').length).toEqual(1);
  });
  it('Has footerlinks', () => {
    expect(component.find('#footerlinks').length).toEqual(1);
  });
  it('Has two navitems', () => {
    expect(component.find('.navitem').length).toEqual(2);
  });
});
