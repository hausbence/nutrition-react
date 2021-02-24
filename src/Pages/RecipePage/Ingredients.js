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
									<div className="ingredient-item-labels">
										{ingredient.name}
									</div>
									{ingredient.image !== undefined ? (
										<img
											src={picUrl + ingredient.image}
											alt={ingredient.name}
										/>
									) : (
										<img
											className="recipe_image"
											src="https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png"
											alt={ingredient.name}
										/>
									)}
									<div className="ingredient-item-labels">
										{!checked
											? Math.round(ingredient.measures.metric.amount * 10) / 10
											: ingredient.measures.us.amount}{" "}
										{!checked
											? ingredient.measures.metric.unitShort
											: ingredient.measures.us.unitShort}
									</div>
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
