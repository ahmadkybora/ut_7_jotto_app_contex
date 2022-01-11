import { IS_LOGIN } from "./actionType"

export const isLoggin = () => {
    return {
        type: IS_LOGIN,
        payload: true
    }
}