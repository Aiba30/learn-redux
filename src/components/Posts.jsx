import React from "react";
import { useSelector } from "react-redux";
const Posts = ()=>{
	const posts = useSelector(state=>{
		return state.postReducer.posts;
	})
	return(
		<div>
			<h1>Синхронные посты</h1>
			{!posts.length&&<p>Постов нет</p>}
			<ul>{posts.map(post=>{
				return post.text.trim()&&<li key={post.id}>{post.text}</li>;
			})}</ul>
		</div>
	)
}
export default Posts;