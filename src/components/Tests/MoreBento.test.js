import MoreBento from "..section/More/MoreBento"
import { render } from "react-dom";

jest.mock();

describe({MoreBento}, () =>{
  it("should create MoreBento with empty", () =>{
    const component = render(<MoreBento />);
    expect(component).toMatchSnapshot();
  });
})