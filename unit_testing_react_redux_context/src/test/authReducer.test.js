import { storeFactory } from "../store"
import { IS_LOGIN } from "../store/actions/actionType";
import { isLoggin } from "../store/actions/authAction";
import authReducer from "../store/reducers/authReducer";

describe("", () => {
    test("", () => {
        // تست در صورتیکه تایپ
        // آن با تایپ زیر یکی باشد
        const x = {"isLoggin": {"type": "IS_LOGIN"}};
        const auth = authReducer(x, {type: IS_LOGIN});
        expect(auth).toStrictEqual(x, {type: IS_LOGIN});
    });
    test("", () => {
        const x = {};
        const auth = authReducer({isLoggin: false}, x);
        expect(auth).toStrictEqual({isLoggin: false}, x);
    })
})

describe("", () => {
    test("", () => {
        const store = storeFactory({
            authReducer: {
                isLogging: false,
                type: IS_LOGIN
            }
        });
        const x = {isLoggin: false};
        const m = store.dispatch(isLoggin(x));
        const state = store.getState().authReducer;
        // console.log(state);
    })
})