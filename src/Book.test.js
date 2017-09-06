import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Book from './Book';

describe('should render book component', () => {
  it('should register props passed in', () => {
    const wrapper = mount(<Book book='name' />)
    expect(wrapper.prop('book')).to.equal('name');
  })
  it('should render the component without exploding', () => {
    const wrapper = mount(<Book book='name' />);
    expect(wrapper.find('li')).to.have.length(1);
    expect(wrapper.find('div')).to.have.length(6);
  })
})
