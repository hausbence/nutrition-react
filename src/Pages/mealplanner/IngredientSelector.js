import React from "react";
// import { StyledIngredients } from "./Ingredients.styled";

const IngredientSelector = (props) => {
	let searchedIngredients = props.searchedIngredients;
	let excludedIngredients = props.excludedIngredients;
	let content;
	const picUrl = "https://spoonacular.com/cdn/ingredients_100x100/";

	const onSearchedIngredientClick = (e) => {
		let ingredient = { name: e.target.alt, image: e.target.src };
		if (e.target.alt !== undefined) {
			props.addToExcludedIngredients(ingredient);
		}
	};

	const onExcludedIngredientClick = (e) => {
		let ingredient = { name: e.target.alt, image: e.target.src };
		if (e.target.alt !== undefined) {
			props.removeFromExcludedIngredients(ingredient);
		}
	};

	content = (
		<div className="ingredients-container">
			<div className="ingredients-container-search">
				{searchedIngredients.length !== 0
					? searchedIngredients.data.results.map((ingredient, i) => (
							<div
								className="ingredient-item"
								key={i}
								value={ingredient.name}
								onClick={onSearchedIngredientClick}
							>
								<div className="ingredient-item-labels">{ingredient.name}</div>
								{ingredient.image !== undefined ? (
									<img src={picUrl + ingredient.image} alt={ingredient.name} />
								) : (
									<img
										className="recipe_image"
										src="https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png"
										alt={ingredient.name}
									/>
								)}
							</div>
					  ))
					: ""}
			</div>
			<div className="ingredients-container-selected">
				{excludedIngredients.length !== 0
					? excludedIngredients.map((ingredient, i) => (
							<div
								className="ingredient-item"
								key={i}
								value={ingredient.name}
								onClick={onExcludedIngredientClick}
							>
								<div className="ingredient-item-labels">{ingredient.name}</div>
								{ingredient.image !== undefined ? (
									<img src={ingredient.image} alt={ingredient.name} />
								) : (
									<img
										className="recipe_image"
										src="https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png"
										alt={ingredient.name}
									/>
								)}
							</div>
					  ))
					: ""}
			</div>
		</div>
	);

	return content;
};

export default IngredientSelector;
