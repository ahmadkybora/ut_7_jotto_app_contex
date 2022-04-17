import { http } from '../../services/httpService';

export const getAllUser = () => {
    return http.get()
}