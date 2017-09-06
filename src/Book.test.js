import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Book from './Book';

describe('should render book component', () => {
  it('should register props passed in', () => {
    const wrapper = mount(<Book book='name' />)
    expect(wrapper.prop('book')).to.equal('name');
  })
})