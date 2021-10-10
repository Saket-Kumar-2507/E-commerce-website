import { authConstants } from "./constants";
import axiosInstance from "../helpers/axios";

// "action" is just a JS object that has a property named "type" and several other properties.
// eg- action ={
//        type: LOGIN_REQUEST,
//        increment: x+1
//     }
// "dispatch" is a function that updates the state. It accepts "action" as its argument.
// eg- dispatch(action)


export const login = (user) => {

    return async(dispatch) => {

        const res = await axiosInstance.post('/admin/signin', {
            ...user 
        });

        dispatch({
            type: authConstants.LOGIN_REQUEST,
            payload: {
                ...user                 // it is simply email and password packed inside "user"
            }
        });
    }
}