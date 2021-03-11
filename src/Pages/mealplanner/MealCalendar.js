import React from "react";
import Meal from "./Meal";

import { StyledMealCalendar } from "./MealCalendar.styled";

const MealCalendar = (props) => {
	let content;
	let weeklyPlan = props.weeklyPlan;
	const daysOfTheWeek = [
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
		"saturday",
		"sunday",
	];

	console.log(weeklyPlan);
	content = (
		<StyledMealCalendar>
			<div className="weekly-plan">
				{weeklyPlan !== undefined && weeklyPlan.length !== 0
					? daysOfTheWeek.map((day, index) => (
							<div className="day-container" key={index}>
								<h3 className="day-name">{day}</h3>
								{weeklyPlan[day].meals.map((meal) => (
									<Meal meal={meal} key={meal.id}></Meal>
								))}
							</div>
					  ))
					: ""}
			</div>
		</StyledMealCalendar>
	);

	return content;
};

export default MealCalendar;
