import React, { useState, useEffect } from "react";
import { useHttp } from "../../hooks/http";
import { Markup } from "interweave";
import RecipeSummary from "./RecipeSummary";
import { StyledRecipePage } from "./RecipePage.styled";

const RecipePage = (props) => {
	let content;
	const baseUrl = "http://localhost:8080/recipe/";
	const baseNutritionUrl = "http://localhost:8080/recipe/nutrition/";
	const [url] = useState(baseUrl + props.match.params.id);
	const [nutritionUrl] = useState(baseNutritionUrl + props.match.params.id);
	const [recipe, setRecipe] = useState([]);
	const [nutritionInfo, setNutritionInfo] = useState([]);
	const [isLoading, fetchedData] = useHttp(url, [url]);
	const [isLoadingNutrition, fetchedNutritionData] = useHttp(nutritionUrl, [
		nutritionUrl,
	]);

	useEffect(() => {
		if (fetchedData) {
			setRecipe(fetchedData.data);
		}
	}, [fetchedData]);

	useEffect(() => {
		if (fetchedNutritionData) {
			setNutritionInfo(fetchedNutritionData.data);
		}
	}, [fetchedNutritionData]);

	if (isLoading || isLoadingNutrition) {
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

	console.log(nutritionInfo);

	if (recipe) {
		content = (
			<StyledRecipePage>
				<RecipeSummary recipe={recipe} nutritionInfo={nutritionInfo} />
				<Markup content={recipe.summary} />
			</StyledRecipePage>
		);
	}

	return content;
};

export default RecipePage;
