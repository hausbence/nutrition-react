import React, { useState } from "react";
import { StyledIngredients } from "./Ingredients.styled";
import ToggleSwitch from "./ToggleSwitch";

const Ingredients = (props) => {
	let content;
	const picUrl = "https://spoonacular.com/cdn/ingredients_100x100/";
	const ingredients = props.ingredients;
	const [checked, setChecked] = useState(true);
	console.log(ingredients);
	console.log(checked);
	content = (
		<StyledIngredients>
			<div>
				<ToggleSwitch
					id="switch"
					checked={checked}
					onChange={(checked) => setChecked(checked)}
					optionLabels={["metric", "US"]}
				/>
				<div className="ingredient-list">
					{ingredients !== undefined
						? ingredients.map((ingredient, i) => (
								<div className="ingredient-item" key={ingredient.name}>
									{ingredient.name}
									<img src={picUrl + ingredient.image} alt={ingredient.name} />
									{!checked
										? Math.round(ingredient.measures.metric.amount * 10) / 10
										: ingredient.measures.us.amount}{" "}
									{!checked
										? ingredient.measures.metric.unitShort
										: ingredient.measures.us.unitShort}
								</div>
						  ))
						: ""}
				</div>
			</div>
		</StyledIngredients>
	);

	return content;
};

export default Ingredients;
