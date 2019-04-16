import React from 'react';
import Prompt from '../components/prompt/Prompt';
import { shallow } from 'enzyme';
describe('Prompt', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <Prompt 
        />
      );
    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
    }); 
}); 