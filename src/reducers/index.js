import { combineReducers } from 'redux';
import IpReducer from './ip_reducer';
import UaReducer from './ua_reducer';

export default combineReducers({ 
    ip: IpReducer,
    ua: UaReducer
});