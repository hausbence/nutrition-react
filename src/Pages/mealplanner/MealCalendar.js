import React from "react";
import Meal from "./Meal";

// import { StyledMealCalendar } from "./MealCalendar.styled";

const MealCalendar = (props) => {
	let content;
	let weeklyPlan = props.weeklyPlan;
	console.log(weeklyPlan);
	content = (
		<div className="weekly-plan">
			{weeklyPlan !== undefined && weeklyPlan.length !== 0
				? Object.keys(weeklyPlan).map((key, index) => (
						<div className="day-container" key={index}>
							<h3>{key}</h3>
							{weeklyPlan[key].meals.map((meal) => (
								<Meal meal={meal} key={meal.id}></Meal>
							))}
						</div>
				  ))
				: ""}
		</div>
	);

	return content;
};

export default MealCalendar;
