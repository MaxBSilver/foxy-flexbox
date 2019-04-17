import React from "react";
import Board from "../components/board/Board";
import { shallow } from "enzyme";
describe("Board", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Board roundNumber={1} />);
  });
  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render EasyBoard if roundNumber is under 6", () => {
    expect(wrapper.find("EasyBoard").exists()).toBeTruthy();
    expect(wrapper.find("ModerateBoard").exists()).toBeFalsy();
    expect(wrapper.find("HardBoard").exists()).toBeFalsy();
  });
  it("should render ModerateBoard if roundNumber is over 5 and under 21", () => {
    wrapper = shallow(<Board roundNumber={10} />);
    expect(wrapper.find("EasyBoard").exists()).toBeFalsy();
    expect(wrapper.find("ModerateBoard").exists()).toBeTruthy();
    expect(wrapper.find("HardBoard").exists()).toBeFalsy();
  });
  it("should render HardBoard  if roundNumber is over 20", () => {
    wrapper = shallow(<Board roundNumber={23} />);
    expect(wrapper.find("EasyBoard").exists()).toBeFalsy();
    expect(wrapper.find("ModerateBoard").exists()).toBeFalsy();
    expect(wrapper.find("HardBoard").exists()).toBeTruthy();
  });
  it("should not render HardBoard  if roundNumber is less than 20", () => {
    wrapper = shallow(<Board roundNumber={15} />);
    expect(wrapper.find("EasyBoard").exists()).toBeFalsy();
    expect(wrapper.find("ModerateBoard").exists()).toBeTruthy();
    expect(wrapper.find("HardBoard").exists()).toBeFalsy();
  });
});
