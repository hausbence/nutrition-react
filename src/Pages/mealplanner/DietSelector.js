import React from "react";
// import { StyledIngredients } from "./Ingredients.styled";
import Diet from "./Diet";

const DietSelector = (props) => {
	let content;
	const dietList = [
		"Gluten Free",
		"Ketogenic",
		"Vegetarian",
		"Lacto-Vegetarian",
		"Ovo-Vegetarian",
		"Vegan",
		"Pescetarian",
		"Paleo",
		"Primal",
		"Whole30",
	];

	const onAddClick = (diet) => {
		props.addToSelectedDiets(diet);
	};

	const onRemoveClick = (diet) => {
		props.removeFromSelectedDiets(diet);
	};

	content = (
		<div className="diets-content">
			<span>Ready to give it a shot? Let us know your diet(s).</span>
			<div className="diets">
				{dietList.map((diet, i) => (
					<Diet
						key={i}
						diet={diet}
						onAddClick={onAddClick}
						onRemoveClick={onRemoveClick}
					/>
				))}
			</div>
		</div>
	);

	return content;
};

export default DietSelector;
