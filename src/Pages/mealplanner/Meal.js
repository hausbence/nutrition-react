import React, { useState } from "react";

import { StyledMeal } from "./Meal.styled";
import { Link } from "react-router-dom";

const Meal = (props) => {
	let content;
	const meal = useState(props.meal);

	if (meal) {
		content = (
			<Link to={"/recipe/" + meal[0].id} key={meal[0].id}>
				<StyledMeal>
					{meal[0].imageType !== undefined ? (
						<img
							className="recipe_image"
							src={
								"https://spoonacular.com/recipeImages/" +
								meal[0].id +
								"-240x150.jpg"
							}
							alt={meal[0].title}
						/>
					) : (
						<img
							className="recipe_image"
							src="https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png"
							alt={meal[0].title}
						/>
					)}
					<div className="title">
						<h2>{meal[0].title}</h2>
					</div>
				</StyledMeal>
			</Link>
		);
	}

	return content;
};

export default Meal;
