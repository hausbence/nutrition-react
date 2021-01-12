import React, { useState, useEffect } from "react";
import { useHttp } from "../hooks/http";

const SingleRecipe = (props) => {
    let content;
    const baseUrl = "http://localhost:8080/recipe/"
	const [url] = useState(baseUrl + props.recipe.id);
	const [recipe, setRecipe] = useState([]);
	const [isLoading, fetchedData] = useHttp(url, [url]);

	useEffect(() => {
		
	}, [fetchedData]);

    console.log("test");
    console.log(props);

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

			</div>
		);
	}

	return content;
};

export default SingleRecipe;
