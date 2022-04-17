import { allUser } from '../actions/type';

const initialState = {
    user: [],
}

export default function(state = initialState, action) {
    switch (action.type) {

        case allUser:
            {
                return {
                    ...state,
                    users: action.payload,
                }
            }

        default:
            return state
    }
};