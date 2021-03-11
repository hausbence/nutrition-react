import React, { useState } from "react";
import { StyledMealPlannerPage } from "./MealPlannerPage.styled";
import Axios from "axios";
import DietSelector from "./DietSelector";
import IngredientSelector from "./IngredientSelector";
import { useForm } from "react-hook-form";

const MealPlannerPage = () => {
	const { handleSubmit } = useForm();

	const [calories, setCalories] = useState(0);
	const [selectedDiets, setSelectedDiets] = useState([]);
	const [searchedIngredients, setSearchedIngredients] = useState([]);
	const [excludedIngredients, setExcludedIngredients] = useState([]);
	const [successful, setSuccessful] = useState(false);
	const [message, setMessage] = useState("");

	const baseUrl = "http://localhost:8080/ingredients/";
	const API_URL = "http://localhost:8080/planner/plan/generate";

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
		let duplicate = false;
		for (let i = 0; i < excludedIngredients.length; i++) {
			if (excludedIngredients[i].name === ingredient.name) {
				removeFromExcludedIngredients(ingredient);
				duplicate = true;
			}
		}
		if (duplicate !== true) {
			const newExcludedIngredientsArray = [...excludedIngredients, ingredient];
			setExcludedIngredients(newExcludedIngredientsArray);
		}
	};

	const removeFromExcludedIngredients = (ingredientToRemove) => {
		const newExcludedIngredientsArray = [];
		for (let i = 0; i < excludedIngredients.length; i++) {
			if (excludedIngredients[i].name !== ingredientToRemove.name) {
				newExcludedIngredientsArray.push(excludedIngredients[i]);
			}
		}
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

	const handleFormPost = (e) => {
		let calories = 1000;
		let diet = "vegan";
		let excludes = ["cucumber"];
		setMessage("");
		setSuccessful(false);

		Axios.post(API_URL, {
			calories,
			diet,
			excludes,
		}).then(
			(response) => {
				console.log(response);
			},
			(error) => {
				console.log(error);
			}
		);
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
					<button onClick={handleSubmit(handleFormPost)}>Submit</button>
				</form>
			</StyledMealPlannerPage>
		</React.Fragment>
	);
};

export default MealPlannerPage;
