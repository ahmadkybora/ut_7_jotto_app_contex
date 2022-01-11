import { shallow } from "enzyme";
import A1 from "../components/a1"

test("", () => {
    const a = shallow(<A1 />);
    const b = a.state('user');
    expect(b).toBe(0);
})