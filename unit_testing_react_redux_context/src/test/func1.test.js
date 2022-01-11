import { shallow } from "enzyme";
import Func2 from "../components/func2";

describe("", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Func2 />);
    })
    test("", () => {
        // console.log(wrapper.debug());
    })
    test("", () => {
        const p = wrapper.find('p');
        expect(p.text()).toContain("0")
    })
})