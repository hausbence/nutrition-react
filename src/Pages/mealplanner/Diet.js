import React, { useState } from "react";

const Diet = (props) => {
	const [isActive, setIsActive] = useState("inactive");

	let content;
	const diet = useState(props.diet);

	const onClickEvent = () => {
		if (isActive === "active") {
			setIsActive("inactive");
			props.onRemoveClick(props.diet);
		} else {
			setIsActive("active");
			props.onAddClick(props.diet);
		}
	};

	if (diet) {
		content = (
			<div
				value={props.diet}
				onClick={onClickEvent}
				className={["diet-item", isActive].join(" ")}
			>
				{props.diet}
			</div>
		);
	}

	return content;
};

export default Diet;
