import React from 'react';
import ModerateBoard from '../components/answer/Answer';
import { shallow } from 'enzyme';
describe('ModerateBoard', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <ModerateBoard
        />
      );
    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
      });
  });