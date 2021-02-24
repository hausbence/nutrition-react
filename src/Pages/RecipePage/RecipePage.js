import React, { useState, useEffect } from "react";
import { useHttp } from "../../hooks/http";
import { Markup } from "interweave";
import RecipeSummary from "./RecipeSummary";
import Ingredients from "./Ingredients";
import Tags from "./Tags";
import { StyledRecipePage } from "./RecipePage.styled";
import Tabs from "./tab";
import TabPane from "./tab-pane";

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

	console.log(recipe);
	console.log(recipe.extendedIngredients);

	if (recipe && nutritionInfo && nutritionInfo.length !== 0) {
		content = (
			<StyledRecipePage>
				<RecipeSummary recipe={recipe} nutritionInfo={nutritionInfo} />
				<Tabs>
					<TabPane name="Summary" key="1">
						<Markup content={recipe.summary} />
					</TabPane>
					<TabPane name="Ingredients" key="2">
						<Ingredients ingredients={recipe.extendedIngredients} />
					</TabPane>
					<TabPane name="Instructions" key="3">
						<Markup content={recipe.instructions} />
					</TabPane>
					<TabPane name="Nutrition" key="4">
						{nutritionInfo !== undefined
							? nutritionInfo.bad.map((nutrition, i) => (
									<div key={nutrition.title}>
										{nutrition.title} + {nutrition.amount} +
										{nutrition.percentOfDailyNeeds}
									</div>
							  ))
							: ""}

						<div>
							{nutritionInfo !== undefined
								? nutritionInfo.good.map((nutrition, i) => (
										<div key={nutrition.title}>
											{nutrition.title} + {nutrition.amount} +
											{nutrition.percentOfDailyNeeds}
										</div>
								  ))
								: ""}
						</div>
					</TabPane>
					<TabPane name="Tags" key="5">
						<Tags recipe={recipe} />
					</TabPane>
				</Tabs>
			</StyledRecipePage>
		);
	}

	return content;
};

export default RecipePage;
