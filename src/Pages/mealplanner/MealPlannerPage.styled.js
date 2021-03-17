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
	mealplanner-form {
		padding: 10px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}
	.mealplanner-diets {
	}
	.ingredients-container-search {
		max-width: 700px;
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
	}
	.ingredients-container-selected {
		display: flex;
		flex-wrap: wrap;
		max-width: 700px;
	}
	.ingredient-item {
		display: inline-block;
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
`;
