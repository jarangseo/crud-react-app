import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import apiReducer from './apiReducer';

export default combineReducers({
    apiReducer,
    form: formReducer
});