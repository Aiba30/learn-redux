import { CREATE_POST, GET_POSTS, POSTS } from "./type";
import uniqid from 'uniqid';
const initialState = {
	value:{id:uniqid(),text:''},
	posts:[],
	fetchPosts:[]
}
export function postReducer(state = initialState,action){
	switch(action.type){
		case CREATE_POST:
			return {...state,value:{...state.value,text:action.payload,id:uniqid()}};
		case POSTS:
			return {...state,posts:[...state.posts,{...state.value}]};
		case GET_POSTS:
			return {...state,fetchPosts:action.fetchPayload}
		default:return state;
	}
}