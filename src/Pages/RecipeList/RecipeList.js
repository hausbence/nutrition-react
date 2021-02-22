import React, { useState, useEffect } from "react";
import { useHttp } from "../../hooks/http";

import { StyledRecipeList } from "./RecipeList.styled";
import Recipe from "./Recipe";

const RecipeList = (props) => {
	let content;
	const [url] = useState(props.url);
	const [recipes, setRecipes] = useState([]);
	const [isLoading, fetchedData] = useHttp(url, [url]);

	useEffect(() => {
		if (fetchedData) {
			if (fetchedData.data.results === undefined) {
				setRecipes(fetchedData.data.recipes);
			} else {
				setRecipes(fetchedData.data.results);
			}
		}
	}, [fetchedData]);

	if (isLoading) {
		content = (
			<div className="loading">
				<h2>Loading...</h2>
			</div>
		);
	} else {
		content = (
			<div className="recipes__container">
				<h2>Sorry, I have no results :(</h2>
			</div>
		);
	}

	if (recipes) {
		content = (
			<StyledRecipeList>
				{recipes.map((recipe, i) => (
					<Recipe recipe={recipe} key={recipe.id}></Recipe>
				))}
			</StyledRecipeList>
		);
	}

	return content;
};

export default RecipeList;
