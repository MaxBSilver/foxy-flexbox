import React from "react";
import HardBoard from "../components/board/hard-board/HardBoard";
import { shallow } from "enzyme";
describe("Board", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HardBoard />);
  });
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
