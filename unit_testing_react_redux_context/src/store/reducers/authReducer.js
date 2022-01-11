import { IS_LOGIN } from "../actions/actionType";

export const INITIAL_STATE = {
    isLoggin: false
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case IS_LOGIN:
            return {
                ...state,
                isLoggin: action,
            }
        default:
            return state;
    }
}