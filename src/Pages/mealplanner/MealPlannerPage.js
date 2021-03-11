import React, { useState } from "react";
import { StyledMealPlannerPage } from "./MealPlannerPage.styled";
import Axios from "axios";
import DietSelector from "./DietSelector";
import IngredientSelector from "./IngredientSelector";
import { useForm } from "react-hook-form";
import Recipe from "../RecipeList/Recipe";

const MealPlannerPage = () => {
	const { handleSubmit } = useForm();

	const [calories, setCalories] = useState(0);
	const [selectedDiets, setSelectedDiets] = useState([]);
	const [searchedIngredients, setSearchedIngredients] = useState([]);
	const [excludedIngredients, setExcludedIngredients] = useState([]);
	const [excludedIngredientNames, setExcludedIngredientNames] = useState([]);
	const [weeklyPlan, setWeeklyPlan] = useState({});
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
			const newExcludedIngredientNamesArray = [
				...excludedIngredientNames,
				ingredient.name,
			];
			setExcludedIngredients(newExcludedIngredientsArray);
			setExcludedIngredientNames(newExcludedIngredientNamesArray);
		}
	};

	const removeFromExcludedIngredients = (ingredientToRemove) => {
		const newExcludedIngredientsArray = [];
		const newExcludedIngredientNamesArray = [];
		for (let i = 0; i < excludedIngredients.length; i++) {
			if (excludedIngredients[i].name !== ingredientToRemove.name) {
				newExcludedIngredientsArray.push(excludedIngredients[i]);
				newExcludedIngredientNamesArray.push(excludedIngredients[i].name);
			}
		}
		setExcludedIngredients(newExcludedIngredientsArray);
		setExcludedIngredientNames(newExcludedIngredientNamesArray);
	};

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
		setMessage("");
		setSuccessful(false);

		Axios.get(API_URL, {
			calories: calories,
			diet: selectedDiets,
			excludes: excludedIngredients,
		}).then(
			(response) => {
				let weeklyPlanObject = response.data.week;
				formatObjectToArray(weeklyPlanObject);
				setSuccessful(true);
			},
			(error) => {
				console.log(error);
				console.log(successful);
			}
		);
	};

	const formatObjectToArray = (weeklyPlanObject) => {
		let weeklyPlanDict = {};
		Object.keys(weeklyPlanObject).forEach(function (key) {
			weeklyPlanDict[key] = weeklyPlanObject[key];
		});
		setWeeklyPlan(weeklyPlanDict);
	};

	console.log(weeklyPlan);
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
				{message}
				<div className="weekly-plan">
					{weeklyPlan !== undefined && weeklyPlan.length !== 0
						? Object.keys(weeklyPlan).map((key, index) => (
								<div className="day-container" key={index}>
									<h3>{key}</h3>
									{weeklyPlan[key].meals.map((meal) => (
										<Recipe recipe={meal} key={meal.id}></Recipe>
									))}
								</div>
						  ))
						: ""}
				</div>
			</StyledMealPlannerPage>
		</React.Fragment>
	);
};

export default MealPlannerPage;
