import React, { useState, useEffect } from "react";
import { useHttp } from "../hooks/http";
import { Markup } from "interweave";

const SingleRecipe = (props) => {
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

	console.log(recipe);

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
				<h2>{recipe.title}</h2>
				<img src={recipe.image} alt={recipe.image} />
				<Markup content={recipe.summary} />
			</div>
		);
	}

	return content;
};

export default SingleRecipe;
