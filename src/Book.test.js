import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Book from './Book';
const book = {
  author: 'test',
  title: 'testTitle'
}
describe('should render', () => {
  it('should have all divs', () => {
    const wrapper = mount(<Book />)
    expect(wrapper.find('div')).to.have.length(6)
  })
})