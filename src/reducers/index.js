import counterReducer from './counter';
import loggedReducer from './isLogged';
import userReducer from './users';
import {combineReducers} from 'redux';


const allRerducers = combineReducers({
    counter: counterReducer,
    isLogged : loggedReducer,
    userList: userReducer,

})

export default allRerducers;