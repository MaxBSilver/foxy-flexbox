import React from 'react';
import HardSnippet from '../components/answer/HardSnippet';
import { shallow } from 'enzyme';
describe('EasySnippet', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <HardSnippet
        />
      );
    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
      });
  });