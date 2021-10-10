import { authConstants } from "../actions/constants";

// a reducer is a function that accepts two parameters:
// 1.) Initial state      2.) action

// It performs the action on the initial state and then it returns the final state.

// Sample code:

// function(state= initialState, action)
// {
//     switch(action.type)
//     {
//         case LOGIN_REQUEST: 
//             return {
//                 // final action
//             }

//         case LOGOUT_REQUEST:
//             return {
//                 // final action
//             }
//     }
// }

const initState = {
    name: 'Saket'
};

export default (state = initState, action) => {
    console.log(action);
    
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state= {
                ...state,                        // It makes copy of the current state
                ...action.payload                // It makes a copy of payload of the action
            }
            break;
    }

    return state;
}