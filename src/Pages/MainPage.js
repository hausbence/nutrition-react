import React, { useState } from "react";
import RecipeList from "./RecipeList/RecipeList";

const MainPage = (props) => {
	const [url] = useState("http://localhost:8080/recipes/random");

	return (
		<React.Fragment>
			<div className="mainpage__container">
				<RecipeList url={url} />
			</div>
		</React.Fragment>
	);
};

export default MainPage;
