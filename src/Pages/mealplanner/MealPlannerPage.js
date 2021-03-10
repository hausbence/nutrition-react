import React, { useState } from "react";
import { StyledMealPlannerPage } from "./MealPlannerPage.styled";

const MealPlannerPage = () => {
	const [calories, setCalories] = useState(0);
	const dietList = [
		"Gluten Free",
		"Ketogenic",
		"Vegetarian",
		"Lacto-Vegetarian",
		"Ovo-Vegetarian",
		"Vegan",
		"Pescetarian",
		"Paleo",
		"Primal",
		"Whole30",
	];
	const [selectedDiets, setSelectedDiets] = useState([]);

	const onChangeCalories = (e) => {
		const calories = e.target.value;
		setCalories(calories);
	};

	const onAddButtonClick = (e) => {
		e.preventDefault();
		const diet = e.target.value;
		addToSelectedDiets(diet);
	};

	const addToSelectedDiets = (dietToAdd) => {
		if (selectedDiets.includes(dietToAdd)) {
			removeFromSelectedDiets(dietToAdd);
		} else {
			const newDietArray = [...selectedDiets, dietToAdd];
			setSelectedDiets(newDietArray);
		}
	};

	const onRemoveButtonClicK = (e) => {
		e.preventDefault();
		const dietToRemove = e.target.value;
		removeFromSelectedDiets(dietToRemove);
	};

	const removeFromSelectedDiets = (dietToRemove) => {
		const newDietArray = selectedDiets.filter((diet) => diet !== dietToRemove);
		setSelectedDiets(newDietArray);
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
					<div className="diets-selector">
						{dietList.map((diet, i) => (
							<button value={diet} key={i} onClick={onAddButtonClick}>
								{diet}
							</button>
						))}
					</div>
					<div className="selected-diets">
						{selectedDiets.map((diet, i) => (
							<div key={i}>
								{diet}
								<button value={diet} onClick={onRemoveButtonClicK}>
									X
								</button>
							</div>
						))}
					</div>
				</form>
			</StyledMealPlannerPage>
		</React.Fragment>
	);
};

export default MealPlannerPage;
