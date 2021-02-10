import React, { useState } from "react";

const RecipeSummary = (props) => {
	const [recipe, setRecipe] = useState(props.recipe);
	console.log(recipe);
	let content = (
		<React.Fragment>
			<br></br>
			<br></br>
			<br></br>
			<p>{recipe.image}</p>
		</React.Fragment>
	);
	return content;
};

export default RecipeSummary;
