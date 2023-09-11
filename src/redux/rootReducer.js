import { combineReducers } from "redux";
import {postReducer} from './postReducer';
import {reducer} from './reducer'
export const rootReducer = combineReducers({
	postReducer,
	reducer
})