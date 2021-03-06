import React from 'react';
import Header from '../components/header/Header';
import { shallow } from 'enzyme';
describe('Header', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <Header
        />
      );
    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
      });
  });