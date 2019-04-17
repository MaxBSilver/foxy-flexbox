import React from 'react';
import EasySnippet from '../components/answer/EasySnippet';
import { shallow } from 'enzyme';
describe('EasySnippet', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <EasySnippet
        />
      );
    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
      });
  });