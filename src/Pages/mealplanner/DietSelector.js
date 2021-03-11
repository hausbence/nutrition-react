import React from "react";
// import { StyledIngredients } from "./Ingredients.styled";

const DietSelector = (props) => {
	let selectedDiets = props.selectedDiets;
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

	const onAddButtonClick = (e) => {
		e.preventDefault();
		const diet = e.target.value;
		props.addToSelectedDiets(diet);
	};

	const onRemoveButtonClicK = (e) => {
		e.preventDefault();
		const dietToRemove = e.target.value;
		props.removeFromSelectedDiets(dietToRemove);
	};

	content = (
		<div>
			<div className="dropdown">
				<span>Select diet(s)</span>
				<div className="dropdown-content">
					{dietList.map((diet, i) => (
						<button value={diet} key={i} onClick={onAddButtonClick}>
							{diet}
						</button>
					))}
				</div>
			</div>
			<div className="selected-diets">
				{selectedDiets.map((diet, i) => (
					<div key={i}>
						{diet}
						<button value={diet} onClick={onRemoveButtonClicK}>
							X
						</button>
					</div>
				))}
			</div>
		</div>
	);

	return content;
};

export default DietSelector;
