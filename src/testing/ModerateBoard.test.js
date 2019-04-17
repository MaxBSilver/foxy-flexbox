import React from 'react';
import ModerateBoard from '../components/board/moderate-board/ModerateBoard';
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