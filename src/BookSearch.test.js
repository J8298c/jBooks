import React from 'react';
import {shallow } from 'enzyme';
import { expect } from 'chai';

import BookSearch from './BookSearch';

describe('BookSearch should render', () => {
  const wrapper =shallow(<BookSearch />)
  it('should render without exploding', () => {
    expect(wrapper.find('div')).to.have.length(4);
    expect(wrapper.find('ol')).to.have.length(1);
  })
})