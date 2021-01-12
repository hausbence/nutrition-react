import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHttp } from "../hooks/http";

import "./RecipeList.css";

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
			<div className="recipes__container">
				{recipes.map((recipe, i) => (
					<Link
						to={{
							pathname: "/recipe/" + recipe.id,
							recipe: recipe,
						}}
						key={recipe.id}
						recipe={recipe}
					>
						<div className="recipe__container" key={recipe.id}>
							<img src={recipe.image} alt={recipe.image} />
							<div className="recipe__title">{recipe.title}</div>
						</div>
					</Link>
				))}
			</div>
		);
	}

	return content;
};

export default RecipeList;
