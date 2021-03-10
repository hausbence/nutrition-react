import React, { useState, useEffect } from "react";
import { StyledMealPlannerPage } from "./MealPlannerPage.styled";
import Axios from "axios";

const MealPlannerPage = () => {
	const [calories, setCalories] = useState(0);
	const [selectedDiets, setSelectedDiets] = useState([]);
	const [searchedIngredients, setSearchedIngredients] = useState([]);
	const [excludedIngredients, setExcludedIngredients] = useState([]);

	const picUrl = "https://spoonacular.com/cdn/ingredients_100x100/";
	const baseUrl = "http://localhost:8080/ingredients/";
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

	// useEffect(() => {
	// 	Axios.get(url).then((res) => {
	// 		setIsLoading(false);
	// 		setFetchedData(res);
	// 	});
	// }, [searchTerm]);

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

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			let input = event.target.value;

			Axios.get(baseUrl + input).then((res) => {
				setSearchedIngredients(res);
			});
		}
	};

	console.log(searchedIngredients);
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
					<div>
						<input
							type="text"
							placeholder="Search ingredients..."
							onKeyPress={handleKeyPress}
						/>
					</div>
					<div>
						{searchedIngredients.length !== 0
							? searchedIngredients.data.results.map((ingredient, i) => (
									<div className="ingredient-item" key={i}>
										<div className="ingredient-item-labels">
											{ingredient.name}
										</div>
										{ingredient.image !== undefined ? (
											<img
												src={picUrl + ingredient.image}
												alt={ingredient.name}
											/>
										) : (
											<img
												className="recipe_image"
												src="https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png"
												alt={ingredient.name}
											/>
										)}
									</div>
							  ))
							: ""}
					</div>
				</form>
			</StyledMealPlannerPage>
		</React.Fragment>
	);
};

export default MealPlannerPage;
