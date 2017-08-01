import {combineReducers} from 'redux';
import UserReducer from './reducer-users';

const allReducers = combineReducers({
    users: UserReducer, // ./reducer-users의 파일을 담은거임
})

export default allReducers;