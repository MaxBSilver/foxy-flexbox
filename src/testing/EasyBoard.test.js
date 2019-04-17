import React from 'react';
import EasyBoard from '../components/board/easy-board/EasyBoard';
import { shallow } from 'enzyme';
describe('EasyBoard', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <EasyBoard
        />
      );
    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
      });
  });