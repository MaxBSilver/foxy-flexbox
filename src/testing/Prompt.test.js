import React from 'react';
import Prompt from '../components/prompt/Prompt';
import { shallow } from 'enzyme';
const mockDetermineQuestion = jest.fn();
const mockIncrementRound = jest.fn();
const mockDecrementRound = jest.fn();
const mockQuestionA = {
  id: 1,
  difficulty: "easy",
  display: "",
  flexDirection: "row",
  prompt: "justify-content",
  justifyContent: "",
  alignContent: "",
  flexWrap: ""
};
describe('Prompt', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <Prompt {...mockQuestionA}
        determineQuestion={mockDetermineQuestion}
        incrementRound={mockIncrementRound}
        decrementRound={mockDecrementRound} />
      );
    });
    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
    }); 
    it('should be able to decrement round on click', () => {
      wrapper.find("button.prompt-previous-button").simulate("click", { preventDefault: () => {} })
      expect(mockDecrementRound).toHaveBeenCalled();
    })
    it('should be able to increment round on click', () => {
      wrapper.find("button.prompt-next-button").simulate("click", { preventDefault: () => {} })
      expect(mockIncrementRound).toHaveBeenCalled();
    })
}); 

