import React from "react";
import { StyledNutritionPanel } from "./NutritionPanel.styled";
import NutritionTable from "./NutritionTable";

const NutritionPanel = (props) => {
	let content;
	let nutritionArray = [];
	const nutritionInfo = props.nutritionInfo;

	const getItems = (list) => {
		if (list !== undefined && list.length !== 0) {
			list.map((item) => nutritionArray.push(item));
		}
	};

	console.log(nutritionInfo);
	getItems(nutritionInfo.bad);
	getItems(nutritionInfo.good);
	console.log(nutritionArray);

	if (nutritionInfo !== undefined) {
		content = (
			<StyledNutritionPanel>
				<div className="macronutrients">
					<div className="macro-item">{nutritionInfo.calories} Calories</div>
					<div className="macro-item">{nutritionInfo.protein} Protein</div>
					<div className="macro-item">{nutritionInfo.fat} Total Fat</div>
					<div className="macro-item">{nutritionInfo.carbs} Carbs</div>
				</div>

				<NutritionTable products={nutritionArray} />
			</StyledNutritionPanel>
		);
	} else {
		content = "Failed to load";
	}

	return content;
};

export default NutritionPanel;
