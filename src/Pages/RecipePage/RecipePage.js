import React, { useState, useEffect } from "react";
import { useHttp } from "../../hooks/http";
import { Markup } from "interweave";
import RecipeSummary from "./RecipeSummary";

const RecipePage = (props) => {
	let content;
	const baseUrl = "http://localhost:8080/recipe/";
	const [url] = useState(baseUrl + props.match.params.id);
	const [recipe, setRecipe] = useState([]);
	const [isLoading, fetchedData] = useHttp(url, [url]);

	useEffect(() => {
		if (fetchedData) {
			setRecipe(fetchedData.data);
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

	if (recipe) {
		content = (
			<div className="recipe">
				<RecipeSummary recipe={recipe} />
				<Markup content={recipe.summary} />
			</div>
		);
	}

	return content;
};

export default RecipePage;
