import React, { useState } from "react";
import { StyledMealPlannerPage } from "./MealPlannerPage.styled";

const MealPlannerPage = () => {
	const [calories, setCalories] = useState(0);
	const dietList = [
		"gluten free",
		"ketogenic",
		"vegetarian",
		"lacto",
		"ovo",
		"vegan",
		"pescatarian",
		"paleolithic",
		"primal",
		"whole 30",
	];

	const onChangeCalories = (e) => {
		const calories = e.target.value;
		setCalories(calories);
	};

	return (
		<React.Fragment>
			<StyledMealPlannerPage>
				<h1>Plan for a week</h1>
				<form>
					<label htmlFor="calories">Calories per day:</label>
					<input
						type="number"
						className="input-style"
						name="calories"
						value={calories}
						placeholder="Calories per day"
						onChange={onChangeCalories}
						required
						max="10000"
					/>
				</form>
			</StyledMealPlannerPage>
		</React.Fragment>
	);
};

export default MealPlannerPage;
