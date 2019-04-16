import React from "react";
import Board from "../components/answer/Answer";
import { shallow } from "enzyme";
describe("Board", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Board />);
  });
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
