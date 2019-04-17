import React from "react";
import Answer from "../components/answer/Answer";
import { shallow } from "enzyme";

const mockDetermineQuestion = jest.fn();
const mockIncrementRound = jest.fn();
const mockUpdateUserAnswer = jest.fn();
const mockedEvent = { target: { value: "value", name: "name" } };
const mockQuestionA = {
  id: 1,
  difficulty: "easy",
  display: "",
  flexDirection: "row",
  prompt: "justify-content",
  justifyContent: "",
  alignContent: "",
  flexWrap: "",
  btnColor: "#65a565"
};
const mockQuestionB = {
  id: 22,
  difficulty: "easy",
  display: "random",
  flexDirection: "row",
  prompt: "justify-content",
  justifyContent: "random",
  alignContent: "random",
  btnColor: "#65a565",

  flexWrap: "random"
};
const mockQuestionC = {
  id: 23,
  difficulty: "easy",
  display: "",
  flexDirection: "row",
  prompt: "justify-content",
  justifyContent: "",
  alignContent: "",
  btnColor: "#65a565",

  flexWrap: ""
};

describe("Answer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Answer
        {...mockQuestionA}
        determineQuestion={mockDetermineQuestion}
        incrementRound={mockIncrementRound}
        updateUserAnswer={mockUpdateUserAnswer}
      />
    );
  });
  afterEach(() => {
    wrapper = shallow(
      <Answer
        {...mockQuestionA}
        determineQuestion={mockDetermineQuestion}
        incrementRound={mockIncrementRound}
      />
    );
  });
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe("handleSubmit", () => {
    it("should not invoke determineQuestion and incrementRound when the ID is under 21 and the state does not match the question", () => {
      wrapper = shallow(<Answer {...mockQuestionB} />);
      wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      expect(mockDetermineQuestion).not.toHaveBeenCalled();
      expect(mockIncrementRound).not.toHaveBeenCalled();
    });
    it("should invoke determineQuestion and increment round when the ID is under 21 and state matches question", () => {
      wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      expect(mockDetermineQuestion).toHaveBeenCalled();
      expect(mockIncrementRound).toHaveBeenCalled();
    });
    it("should invoke determineQuestion and increment round when the ID is over 21 and state matches question", () => {
      wrapper = shallow(
        <Answer
          {...mockQuestionC}
          determineQuestion={mockDetermineQuestion}
          incrementRound={mockIncrementRound}
        />
      );
      wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      expect(mockDetermineQuestion).toHaveBeenCalled();
      expect(mockIncrementRound).toHaveBeenCalled();
    });
  });
  describe("render HardSnippet", () => {
    it("should not render HardSnippet unless round is over 20", () => {
      expect(wrapper.find("HardSnippet").exists()).toBeFalsy();
      wrapper = shallow(<Answer {...mockQuestionB} />);
      expect(wrapper.find("HardSnippet").exists()).toBeTruthy();
    });
  });
  describe("handleChange", () => {
    it("should invoke updateAnswer when called", () => {
      wrapper = shallow(
        <Answer
          {...mockQuestionA}
          determineQuestion={mockDetermineQuestion}
          incrementRound={mockIncrementRound}
          updateUserAnswer={mockUpdateUserAnswer}
        />
      );
      wrapper.instance().handleChange(mockedEvent);
      expect(mockUpdateUserAnswer).toHaveBeenCalled();
    });
    it("should invoke updateAnswer when called", () => {
      wrapper = shallow(
        <Answer
          {...mockQuestionC}
          determineQuestion={mockDetermineQuestion}
          incrementRound={mockIncrementRound}
          updateUserAnswer={mockUpdateUserAnswer}
        />
      );
      wrapper.instance().handleChange(mockedEvent);
      expect(mockUpdateUserAnswer).toHaveBeenCalled();
      expect(wrapper.state("btnColor")).toEqual("#65a565");
    });
    it("should invoke updateAnswer when called", () => {
      wrapper = shallow(
        <Answer
          {...mockQuestionA}
          determineQuestion={mockDetermineQuestion}
          incrementRound={mockIncrementRound}
          updateUserAnswer={mockUpdateUserAnswer}
        />
      );
      wrapper.instance().handleChange(mockedEvent);
      expect(mockUpdateUserAnswer).toHaveBeenCalled();
      expect(wrapper.state("btnColor")).toEqual("#65a565");
    });
  });
});
