import React from "react";

const RecipeSummary = (props) => {
	const recipe = props.recipe;
	let content = (
		<React.Fragment>
			<br></br>
			<br></br>
			<br></br>
			<p>{recipe.title}</p>
			<p>{recipe.summary}</p>
			<p>{recipe.image}</p>
		</React.Fragment>
	);
	return content;
};

export default RecipeSummary;
