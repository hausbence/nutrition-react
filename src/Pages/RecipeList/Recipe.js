import React, { useState } from "react";
import { Markup } from "interweave";

import { StyledRecipe } from "./Recipe.styled";
import { Link } from "react-router-dom";
import clock from "../../resources/clock.png";
import like from "../../resources/like.png";

const Recipe = (props) => {
	let content;
	const recipe = useState(props.recipe);
	const [hovered, setHovered] = useState(false);

	console.log(recipe[0].image);
	console.log(recipe[0]);
	if (recipe) {
		content = (
			<Link to={"/recipe/" + recipe[0].id} key={recipe[0].id}>
				<StyledRecipe
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
					hovered={hovered}
				>
					{recipe[0].image !== undefined ? (
						<img
							className="recipe_image"
							src={recipe[0].image}
							alt={recipe[0].title}
						/>
					) : (
						<img
							className="recipe_image"
							src="https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png"
							alt={recipe[0].title}
						/>
					)}

					<div className="image_overlay">
						<Markup content={recipe[0].summary} blockList={"a"} />
					</div>
					<div className="title">
						<h2>
							{recipe[0].title.length > 44
								? recipe[0].title.slice(0, 41) + "..."
								: recipe[0].title}
						</h2>
					</div>
					<div className="time">
						<h6>{recipe[0].readyInMinutes}</h6>
						<img src={clock} alt="time" width="32px" />
					</div>
					<div className="likes">
						<h6>{recipe[0].aggregateLikes}</h6>
						<img src={like} alt="likes" width="32px" />
					</div>
				</StyledRecipe>
			</Link>
		);
	}

	return content;
};

export default Recipe;
