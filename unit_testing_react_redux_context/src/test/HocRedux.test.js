import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import HocRedux from '../components/classComponents/HocRedux';
import { storeFactory } from './utils';

const setup = (state={}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<HocRedux store={store} />).dive().dive();
    return wrapper;
}
// تست یک کلاس کامپوننت 
// برای دسترسی به استور
// و همچنین تست
// hoc
describe.skip("", () => {
    // let wrapper;
    // let store;
    // beforeEach(() => {
    //     // همانند فانکشنال کامپوننت
    //     // اینجا هم به استور دسترسی داریم
    //     // بوسیله زیر
    //     store = storeFactory();
    // })
    
    test("", () => {
        const wrapper = setup({});
        const successProp = wrapper.instance().props;
        console.log(successProp);
        // expect(successProp).toBe(success);
    })
})