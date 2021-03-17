import styled from "styled-components";

export const StyledMealPlannerPage = styled.div`
	margin: 70px auto 0 auto;
	display: flex;
	max-width: 1350px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
	color: ${({ theme }) => theme.primaryDark};
	.mealplanner-top {
		width: 800px;
		display flex;
		flex-wrap: wrap;
		min-height: 250px;
	}
	.mealplanner-toptop {
		width: 100%;
		text-align: center;
		margin-bottom: 5px;
	}
	.mealplanner-toptop h1 {
		margin: 0;
	}
	.mealplanner-form {
		padding: 10px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		align-items: center;
	}
	.weekly-plan {
		display: flex;
		max-width: 1400px;
		margin: auto;
	}
	.diets-content {
		text-align: center;
	}
	.diets-content span {
		font-size: 20px;
		font-weight: 600;
		height: 50px;
	}
	.diets {
		margin: 10px 0;
		display: flex;
		flex-wrap: wrap;
		height: 148px;
		width: 800px;
	}
	.diets .diet-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 156px;
		height: 70px;
		margin: 2px;
		border-radius: 5px;
		cursor: pointer;
		background: ${({ theme }) => theme.primaryLight};
	}

	.diets .active {
		background: #4cb8c4; 
		background: -webkit-linear-gradient(
			to right,
			#4cb8c4,
			#3cd3ad
		);
		background: linear-gradient(
			to right,
			#4cb8c4,
			#3cd3ad
		); 
	}
	.mealplanner-calories {
		margin: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.mealplanner-calories label {
		display: none;
	}
	.mealplanner-calories input[type=number] {
		border-radius: 3px;
		border: none;
		margin: 5px;
		height: 30px;
		width: 80px;
		text-align: right;
		padding: 3px;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
  		-webkit-appearance: none;
 		 margin: 0;
	}
	input[type=number] {
  		-moz-appearance: textfield;
	}
	.mealplanner-ingredients {
		width: 800px;
		border-radius: 5px;
		padding: 5px;
		background: ${({ theme }) => theme.primaryLight};
	}
	.ingredients-visible {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.ingredients-visible h4 {
		margin: 5px;
	}
	.arrow {
		margin: 5px;
		padding: 5px;
	}
	.ingredients-search input {
		padding: 3px;
	}
	.open {
		display: flex;
		flex-wrap: wrap;
	}
	.hidden {
		display: none;
	}
	.ingredients-titles {
		justify-content: space-around;
		flex-grow: 2;
		width: 100%;
		display: flex;
	}
	.ingredients-container-search {
		width: 50%;
		display: flex;
		flex-wrap: wrap;
		border-right: 2px solid grey;
		align-content: flex-start;
	}
	.ingredients-container-selected {
		width: 50%;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
	}
	.ingredient-item {
		margin: 8px 15px;
		position: relative;
		height: 100px;
		width: 100px;
		cursor: pointer;
	}
	.recipe_image {
		display: block;
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 5px 5px 0 0;
	}
	.ingredient-item-label {
		position: absolute;
		bottom: 0;
		color: ${({ theme }) => theme.text};
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.9),
			rgba(0, 0, 0, 0.9)
		);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 60px;
		overflow: hidden;
		word-break: break-word;
		text-align: center;
	}
	.mealplanner-form button {
		margin: 10px;
		padding: 10px 20px;
		cursor: pointer;
	}
	i {
		border: solid #4cb8c4;
		border-width: 0 6px 6px 0;
		display: inline-block;
		padding: 3px;
		transition: all 0.3s linear;
	 }
	.downArrow {
		transform: rotate(45deg);
	}
	.leftArrow {
		transform: rotate(135deg);
	}
`;
