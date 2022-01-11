import { IS_LOGIN } from '../store/actions/actionType';
import { storeFactory } from './utils';

describe("", () => {
    const store = storeFactory();
    test("", () => {
        const state = store.getState();
        // console.log(state);
    });
    test("", () => {
        const state = store.dispatch({ type: IS_LOGIN });
        // console.log(state);
    })
})