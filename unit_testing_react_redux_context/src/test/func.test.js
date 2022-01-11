import { shallow, mount } from 'enzyme';
import Func from '../components/func';
import { a, b } from '../components/func';

describe("", () => {
    test("", () => {
        const func = a();
        expect(func).toBe(3);
    });
    test("", () => {
        const func = b(2, 2);
        expect(func).toBe(4);
    })
})