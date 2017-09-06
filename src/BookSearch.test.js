import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import BookSearch from './BookSearch';

describe('BookSearch should render', () => {
  const wrapper = mount(<BookSearch />)
  it('should render without exploding', () => {
    expect(wrapper.find('div')).to.have.length(1);
  })
})