import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions";
const Asyncposts = ()=>{
	const dispatch = useDispatch();
	function getAsyncPosts(){
		return dispatch(getPosts())
	}
	const response = useSelector(state=>{
		return state.postReducer.fetchPosts;
	});
	const loading = useSelector(state=>{
		return state.reducer.loading;
	});
	const alert = useSelector(state=>{
		return state.reducer.alert;
	})
	return(
		<div>
			{alert&&<div className="alert">Error</div>}
			<h1>Асинхронные посты</h1>
			{loading&&<div className="lds-dual-ring"></div>}
			{!response.length&&loading === false?<button onClick={getAsyncPosts} className="btn">загрузить</button>:
			<ul>
				{response.map(post=>{
					return <li key={post.id}>{post.title}{post.body}</li>
				})}
			</ul>}
		</div>
	)
}
export default Asyncposts;
