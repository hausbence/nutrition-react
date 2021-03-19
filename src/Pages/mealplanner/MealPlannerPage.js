import React, { useState } from "react";
import { StyledMealPlannerPage } from "./MealPlannerPage.styled";
import Axios from "axios";
import DietSelector from "./DietSelector";
import IngredientSelector from "./IngredientSelector";
import { useForm } from "react-hook-form";
import MealCalendar from "./MealCalendar";
import { useCookies } from "react-cookie";

const MealPlannerPage = () => {
	const { handleSubmit } = useForm();

	const [isOpen, setIsOpen] = useState("hidden");
	const [calories, setCalories] = useState(0);
	const [selectedDiets, setSelectedDiets] = useState([]);
	const [searchedIngredients, setSearchedIngredients] = useState([]);
	const [excludedIngredients, setExcludedIngredients] = useState([]);
	const [excludedIngredientNames, setExcludedIngredientNames] = useState([]);
	const [weeklyPlan, setWeeklyPlan] = useState("");
	const [successful, setSuccessful] = useState(false);
	const [message, setMessage] = useState("");
	const [cookies] = useCookies(["username"]);

	const baseUrl = "http://localhost:8080/ingredients/";
	const API_URL = "http://localhost:8080/planner/plan/generate";
	const API_URL_SAVE = "http://localhost:8080/planner/plan/generated/save";

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
			setIsOpen("open");
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

	const openContainer = () => {
		if (isOpen === "hidden") {
			setIsOpen("open");
		} else {
			setIsOpen("hidden");
		}
	};

	const createJsonToSave = () => {
		let json = {};
		let meals = [];
		Object.values(weeklyPlan).map((day) =>
			meals.push({ meals: day.meals, nutrients: day.nutrients })
		);
		json.days = meals;
		json.username = cookies.username;
		return json;
	};

	const savePlan = () => {
		let json = createJsonToSave();
		Axios.post(API_URL_SAVE, {
			headers: { "Content-Type": "application/json", dataType: "json" },
			username: json.username,
			days: json.days,
		}).then(
			(response) => {
				console.log(response);
				setMessage("Succesfull save!");
			},
			(error) => {
				console.log(error);
				console.log(successful);
			}
		);
	};

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
						<div className="mealplanner-ingredients">
							<div className="ingredients-visible">
								<h4>Allergies, ingredients to exclude:</h4>
								<div className="ingredients-search">
									<input
										type="text"
										placeholder="Search ingredients..."
										onKeyPress={handleKeyPress}
									/>
								</div>
								<div className="arrow" onClick={openContainer}>
									{isOpen === "open" ? (
										<i className="downArrow"></i>
									) : (
										<i className="leftArrow"></i>
									)}
								</div>
							</div>
							<IngredientSelector
								isOpen={isOpen}
								searchedIngredients={searchedIngredients}
								excludedIngredients={excludedIngredients}
								addToExcludedIngredients={addToExcludedIngredients}
								removeFromExcludedIngredients={removeFromExcludedIngredients}
							/>
						</div>
						<button onClick={handleSubmit(handleFormPost)}>
							Generate plan
						</button>
					</div>
				</div>

				{weeklyPlan !== undefined && weeklyPlan.length !== 0 ? (
					<div className="weeklyplan-container">
						<MealCalendar weeklyPlan={weeklyPlan} />
						<button onClick={savePlan}>Save</button>
						{message}
					</div>
				) : (
					""
				)}
			</StyledMealPlannerPage>
		</React.Fragment>
	);
};

export default MealPlannerPage;
