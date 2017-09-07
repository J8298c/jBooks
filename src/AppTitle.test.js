import React from 'react';
import { mount } from 'enzyme';
import {expect} from 'chai';
import AppTitle from './AppTitle';

describe('should render the apptitle', () => {
  it('should render the title component', () => {
    const wrapper = mount(<AppTitle />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('h1')).to.have.length(1);
  })
})