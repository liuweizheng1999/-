import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {BANNER} from '../types'
let banner=handleActions({
    [BANNER]:(state,actions)=>{
        return actions.payload;
    }
},['dfdf'])
export default combineReducers({
    banner
})