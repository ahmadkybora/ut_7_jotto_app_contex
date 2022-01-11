import { mount, shallow } from "enzyme";
import C from "../components/c"
import Form from "../components/form";

test.skip("ahsdasjf", () => {
    const c = mount(<C />);
    c.find('form');
    expect(c.text()).toContain('s2')
})