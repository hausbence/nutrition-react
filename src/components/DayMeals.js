import React, { useState, useEffect } from "react";
import Meal from "../Pages/mealplanner/Meal";

const DayMeals = (props) => {
	let day = props.day;
	let content;

	content = (
		<div className="day-container-outer">
			{day !== undefined ? (
				<div className="day-container">
					<h3 className="day-name">{day.date}</h3>
					{day.mealEntities.map((meal) => (
						<Meal meal={meal} key={meal.id} />
					))}
					<div className="nutrition-data"></div>
				</div>
			) : (
				""
			)}
		</div>
	);
	return content;
};

export default DayMeals;
