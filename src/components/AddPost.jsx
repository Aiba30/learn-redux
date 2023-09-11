import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, createPost } from "../redux/actions";
const AddForm = ()=>{
	const dispatch = useDispatch();
	const newDispath = useDispatch();
	const text = useSelector(state=>{
		return state.postReducer.value.text;
	})
	function changeHandler(e){
	 dispatch(createPost(e.target.value));
	}
	function submitHandler(e){
		e.preventDefault();
		if(text)newDispath(addPosts());
		dispatch(createPost(''))
	}
	return (
		<form onSubmit={submitHandler} className="form" action="">
			<p className="form__title">Заголовок поста</p>
			<input value={text} onChange={changeHandler} className="form__input" type="text" />
			<button className="form__btn btn">создать</button>
		</form>
	)
}
export default AddForm;