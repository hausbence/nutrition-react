import React, { useState } from "react";
import RecipeList from "./RecipeList/RecipeList";

const MainPage = (props) => {
	const [url] = useState("https://nutricore.herokuapp.com/recipes/random");

	return (
		<React.Fragment>
			<div className="mainpage__container">
				<RecipeList url={url} />
			</div>
		</React.Fragment>
	);
};

export default MainPage;
