import React, { useState } from "react";
import { StyledMealPlannerPage } from "./MealPlannerPage.styled";
import Axios from "axios";
import DietSelector from "./DietSelector";
import IngredientSelector from "./IngredientSelector";
import { useForm } from "react-hook-form";
import MealCalendar from "./MealCalendar";

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

	console.log(selectedDiets);

	return (
		<React.Fragment>
			<StyledMealPlannerPage>
				<div className="mealplanner-top">
					<div className="mealplanner-toptop">
						<h1>Create your meal plan for a week</h1>
						<p>
							Our MealPlanner creates personalized meal plans based on your
							diets, allergies, and target calories. Reach your diet and
							nutritional goals with our weekly meal plans.
							<b> Create your meal plan right here in seconds.</b>
						</p>
					</div>
					<div className="mealplanner-form">
						<div className="mealplanner-diets">
							<DietSelector
								addToSelectedDiets={addToSelectedDiets}
								removeFromSelectedDiets={removeFromSelectedDiets}
								selectedDiets={selectedDiets}
							/>
						</div>
						<div className="mealplanner-calories">
							<label htmlFor="calories">calories</label>
							<h3>I want to eat</h3>
							<input
								type="number"
								className="input-style"
								name="calories"
								value={calories}
								placeholder="1000"
								onChange={onChangeCalories}
								required
								max="10000"
							/>
							<h3>calories a day.</h3>
						</div>
						<div className="mealplanner-bottomright">
							<input
								type="text"
								placeholder="Search ingredients..."
								onKeyPress={handleKeyPress}
							/>

							<IngredientSelector
								searchedIngredients={searchedIngredients}
								excludedIngredients={excludedIngredients}
								addToExcludedIngredients={addToExcludedIngredients}
								removeFromExcludedIngredients={removeFromExcludedIngredients}
							/>
							<button onClick={handleSubmit(handleFormPost)}>Submit</button>
							{message}
						</div>
					</div>
				</div>

				{weeklyPlan !== undefined && weeklyPlan.length !== 0 ? (
					<MealCalendar weeklyPlan={weeklyPlan} />
				) : (
					""
				)}
			</StyledMealPlannerPage>
		</React.Fragment>
	);
};

export default MealPlannerPage;
