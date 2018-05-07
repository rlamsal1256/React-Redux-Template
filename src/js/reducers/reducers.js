import { combineReducers } from 'redux';
import pointsReducer from './pointsReducer';
import tableReducer from './tableReducer';

export default combineReducers({
    pointsReducer,
    tableReducer
});