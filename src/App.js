import React from "react";
import './styles/index.scss'
import AddForm from "./components/AddPost";
import Posts from "./components/Posts";
import Asyncposts from "./components/AsyncPosts";
function App() {
  return (
    <div className="wrapper">
		<AddForm/>
		<div className="row">
			<div className="column">
			<Posts/>
			</div>
			<div className="column">
				<Asyncposts/>
			</div>
		</div>
    </div>
  );
}

export default App;
