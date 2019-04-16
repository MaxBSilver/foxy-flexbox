import React from 'react';
import Main from '../components/main/Main';
import { shallow } from 'enzyme';
describe("Main", () => {
  let mockData = {
    data: [
      {
        id: 1,
        difficulty: "easy",
        display: "flex",
        flexDirection: "row",
        prompt: "justify-content",
        justifyContent: "center",
        alignContent: "flex-end"
      },
      {
        id: 2,
        difficulty: "easy",
        display: "flex",
        flexDirection: "row",
        prompt: "justify-content",
        justifyContent: "flex-end",
        alignContent: "flex-end"
      },
      {
        id: 3,
        difficulty: "easy",
        display: "flex",
        flexDirection: "row",
        prompt: "justify-content",
        justifyContent: "flex-end",
        alignContent: "center"
      },
      {
        id: 4,
        difficulty: "easy",
        display: "flex",
        flexDirection: "row",
        prompt: "justify-content",
        justifyContent: "flex-start",
        alignContent: "flex-end"
      }
    ]
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Main {...mockData} />);
  });
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should increment round", () => {
    expect(wrapper.state("roundNumber")).toEqual(0);
    wrapper.instance().incrementRound();
    expect(wrapper.state("roundNumber")).toEqual(1);
    wrapper.instance().incrementRound();
    expect(wrapper.state("roundNumber")).toEqual(2);
  });
  it("should decrement round", () => {
    expect(wrapper.state("roundNumber")).toEqual(0);
    wrapper.instance().incrementRound();
    expect(wrapper.state("roundNumber")).toEqual(1);
    wrapper.instance().decrementRound();
    expect(wrapper.state("roundNumber")).toEqual(0);
  });
  it("should not decrement round under 0", () => {
    expect(wrapper.state("roundNumber")).toEqual(0);
    wrapper.instance().decrementRound();
    expect(wrapper.state("roundNumber")).toEqual(0);
  });
  it("should update the question when the round is incremented or decremented", () => {
    expect(wrapper.state("question")).toEqual({
      alignContent: "flex-end",
      difficulty: "easy",
      display: "flex",
      flexDirection: "row",
      id: 1,
      justifyContent: "center",
      prompt: "justify-content"
    });
    wrapper.instance().incrementRound();
    expect(wrapper.state("question")).toEqual({
      id: 2,
      difficulty: "easy",
      display: "flex",
      flexDirection: "row",
      prompt: "justify-content",
      justifyContent: "flex-end",
      alignContent: "flex-end"
    });
    wrapper.instance().decrementRound();
    expect(wrapper.state("question")).toEqual({
        alignContent: "flex-end",
        difficulty: "easy",
        display: "flex",
        flexDirection: "row",
        id: 1,
        justifyContent: "center",
        prompt: "justify-content"
      });
  });
  it("should update user answer", () => {
    expect(wrapper.state("userGuessOne")).toEqual('');
    expect(wrapper.state("userGuessTwo")).toEqual('');
    wrapper.instance().updateUserAnswer({jcVal : 'center', acVal : 'flex-end'});
    expect(wrapper.state("userGuessOne")).toEqual('center');
    expect(wrapper.state("userGuessTwo")).toEqual('flex-end');
  })
  it("should update question on load", () => {
    expect(wrapper.state("question")).toEqual({"alignContent": "flex-end", "difficulty": "easy", "display": "flex", "flexDirection": "row", "id": 1, "justifyContent": "center", "prompt": "justify-content"});
  })
});