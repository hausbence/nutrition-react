import React from "react";
import { StyledTags } from "./Tags.styled";
import { Link } from "react-router-dom";

const Tags = (props) => {
	let content;
	const recipe = props.recipe;
	let tags = [];
	const getItems = (list) => {
		if (list !== undefined && list.length !== 0) {
			list.map((item) => tags.push(item));
		}
	};

	getItems(recipe.cuisines);
	getItems(recipe.dishTypes);
	content = (
		<StyledTags>
			<div className="tags-container">
				{tags.map((tag) => (
					<Link
						to={"/recipes/" + tag}
						className="tag-item"
						key={tags.indexOf(tag)}
					>
						{tag}
					</Link>
				))}
			</div>
		</StyledTags>
	);

	return content;
};

export default Tags;
