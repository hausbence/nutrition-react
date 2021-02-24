import React from "react";
import { StyledRecipeSummary } from "./RecipeSummary.styled";

const RecipeSummary = (props) => {
	const recipe = props.recipe;
	const nutritionInfo = props.nutritionInfo;
	console.log(recipe);
	let content = (
		<StyledRecipeSummary>
			<div className="recipe_summ_left">
				<h2>{recipe.title}</h2>
				<div className="recipe_sum_info">
					<div className="recipe_sum_info_item">
						<span className="recipe_sum_info_bold">
							{recipe.extendedIngredients
								? recipe.extendedIngredients.length
								: ""}
						</span>
						<span>Ingredients</span>
					</div>
					<div className="recipe_sum_info_item">
						<span className="recipe_sum_info_bold">
							{recipe.readyInMinutes}
						</span>
						<span>Minutes</span>
					</div>
					<div className="recipe_sum_info_item">
						<span className="recipe_sum_info_bold">
							{nutritionInfo.calories}
						</span>
						<span>Calories</span>
					</div>
				</div>
				<div className="recipe_sum_servings">
					<span className="recipe_sum_info_bold">{recipe.servings}</span>
					<span> servings</span>
				</div>
			</div>
			<div className="recipe_summ_right">
				{recipe.image !== undefined ? (
					<img className="recipe_image" src={recipe.image} alt={recipe.title} />
				) : (
					<img
						className="recipe_image"
						src="https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png"
						alt={recipe.title}
					/>
				)}
			</div>
		</StyledRecipeSummary>
	);
	return content;
};

export default RecipeSummary;
