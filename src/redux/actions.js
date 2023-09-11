import { CREATE_POST, GET_POSTS, HIDE_ALERT, HIDE_LOADER, POSTS, SHOW_ALERT, SHOW_LOADER } from "./type";

export function createPost(text){
	return {
		type:CREATE_POST,
		payload:text,
	}
}

export function addPosts(){
	return {
		type:POSTS,
	}
}
export function showLoader(){
	return {
		type:SHOW_LOADER
	}
}
export function hideLoader(){
	return {
		type:HIDE_LOADER
	}
}
export function showAlert(){
	return {
		type:SHOW_ALERT
	}
}
export function hideAlert(){
	return {
		type:HIDE_ALERT
	}
}
export function getPosts(){
	return async dispatch=>{
		try{
		dispatch(showLoader())
		const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
		const json = await response.json();
		setTimeout(()=>{
			 dispatch({type:GET_POSTS,fetchPayload:json});
			 dispatch(hideLoader())
		},1000)
		}catch{
			dispatch(showAlert());
			dispatch(hideLoader());
			setTimeout(()=>dispatch(hideAlert()),3000)
		}
	}
}