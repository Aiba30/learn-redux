import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "./type";
const initialState ={
	loading:false,
	alert:false
}
export function reducer(state =initialState,action){
	switch(action.type){
		case SHOW_LOADER:
			return {...state,loading:true};
		case HIDE_LOADER:
			return {...state,loading:false};
		case SHOW_ALERT:
			return {...state,alert:true};
		case HIDE_ALERT:
			return {...state,alert:false};
		default:return state
	}
}