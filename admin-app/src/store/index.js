import { createStore , applyMiddleware } from "redux";            // predefined
import rootReducer from '../reducers';
import thunk from "redux-thunk";

// NOTE: There is only one store in areact app

// store consists of several responsibilities like:
// 1.) Holds applictaion state using "createStore" function
// 2.) getState() -> It allows access to state
// 3.) dispatch(action) -> It allows state to be updated
// 4.) subscribe(listener) -> It registers listeners
// 5.) unregistering the of listeners via the function returned by "subscribe(listener)"

// "createStore" is an inbuilt function of "redux" and is used for creating store.
// It accepts "reducer" as its argument. eg- createSore(reducer);


const store= createStore(rootReducer,applyMiddleware(thunk));         // "applyMiddleware(thunk)" allows us to apply "async" in "/actions/auth.actions.js" file

export default store;