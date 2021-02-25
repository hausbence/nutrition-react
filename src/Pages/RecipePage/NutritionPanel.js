import React from "react";
import { StyledNutritionPanel } from "./NutritionPanel.styled";
import NutritionTable from "./NutritionTable";
import { PieChart } from "react-minimal-pie-chart";

const NutritionPanel = (props) => {
	let content;
	let nutritionArray = [];
	const nutritionInfo = props.nutritionInfo;

	const getItems = (list) => {
		if (list !== undefined && list.length !== 0) {
			list.map((item) => nutritionArray.push(item));
		}
	};

	getItems(nutritionInfo.bad);
	getItems(nutritionInfo.good);
	if (nutritionInfo !== undefined) {
		content = (
			<StyledNutritionPanel>
				<div className="macronutrients">
					<div className="macro-item">{nutritionInfo.calories} Calories</div>
					<div className="macro-item">{nutritionInfo.protein} Protein</div>
					<div className="macro-item">{nutritionInfo.fat} Total Fat</div>
					<div className="macro-item">{nutritionInfo.carbs} Carbs</div>
				</div>
				<div className="nutrition-panel-body">
					<div className="nutrition-table">
						<NutritionTable nutrition={nutritionArray} />
					</div>
					<PieChart
						className="piechart"
						style={{ height: "300px", width: "300px" }}
						label={({ dataEntry }) => dataEntry.title}
						labelPosition={75}
						labelStyle={{
							fontSize: "8px",
						}}
						data={[
							{
								title: "Protein",
								value: parseInt(nutritionInfo.protein),
								color: "#E38627",
							},
							{
								title: "Fat",
								value: parseInt(nutritionInfo.fat),
								color: "#6A2135",
							},
							{
								title: "Carbs",
								value: parseInt(nutritionInfo.carbs),
								color: "#C13C37",
							},
						]}
					/>
				</div>
				<p>
					*The Reference Daily Intake (RDI) used in nutrition labeling on food
					and dietary supplement products is the daily intake level of a
					nutrient that is considered to be sufficient to meet the requirements
					of 97–98% of healthy individuals
				</p>
			</StyledNutritionPanel>
		);
	} else {
		content = "Failed to load";
	}

	return content;
};

export default NutritionPanel;
