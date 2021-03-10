import React, { useState } from "react";
import { StyledMealPlannerPage } from "./MealPlannerPage.styled";
import Axios from "axios";
import DietSelector from "./DietSelector";
import IngredientSelector from "./IngredientSelector";

const MealPlannerPage = () => {
	const [calories, setCalories] = useState(0);
	const [selectedDiets, setSelectedDiets] = useState([]);
	const [searchedIngredients, setSearchedIngredients] = useState([]);
	const [excludedIngredients, setExcludedIngredients] = useState([]);

	const baseUrl = "http://localhost:8080/ingredients/";

	const onChangeCalories = (e) => {
		const calories = e.target.value;
		setCalories(calories);
	};

	const addToSelectedDiets = (dietToAdd) => {
		if (selectedDiets.includes(dietToAdd)) {
			removeFromSelectedDiets(dietToAdd);
		} else {
			const newDietArray = [...selectedDiets, dietToAdd];
			setSelectedDiets(newDietArray);
		}
	};

	const removeFromSelectedDiets = (dietToRemove) => {
		const newDietArray = selectedDiets.filter((diet) => diet !== dietToRemove);
		setSelectedDiets(newDietArray);
	};

	const addToExcludedIngredients = (ingredient) => {
		console.log(ingredient);
		if (excludedIngredients.includes(ingredient)) {
			removeFromExcludedIngredients(ingredient);
		} else {
			const newExcludedIngredientsArray = [...excludedIngredients, ingredient];
			setExcludedIngredients(newExcludedIngredientsArray);
		}
	};

	const removeFromExcludedIngredients = (ingredientToRemove) => {
		const newExcludedIngredientsArray = excludedIngredients.filter(
			(ingredient) => ingredient !== ingredientToRemove
		);
		setExcludedIngredients(newExcludedIngredientsArray);
	};

	console.log(excludedIngredients);
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			let input = event.target.value;
			if (input === "") {
				setSearchedIngredients([]);
			} else {
				Axios.get(baseUrl + input).then((res) => {
					setSearchedIngredients(res);
				});
			}
		}
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
					<DietSelector
						addToSelectedDiets={addToSelectedDiets}
						removeFromSelectedDiets={removeFromSelectedDiets}
						selectedDiets={selectedDiets}
					/>
					<div>
						<input
							type="text"
							placeholder="Search ingredients..."
							onKeyPress={handleKeyPress}
						/>
					</div>
					<IngredientSelector
						searchedIngredients={searchedIngredients}
						excludedIngredients={excludedIngredients}
						addToExcludedIngredients={addToExcludedIngredients}
						removeFromExcludedIngredients={removeFromExcludedIngredients}
					/>
				</form>
			</StyledMealPlannerPage>
		</React.Fragment>
	);
};

export default MealPlannerPage;
