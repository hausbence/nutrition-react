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
	.mealplanner-left {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}
	.mealplanner-left-title {
		flex-grow: 2;
	}
	.mealplanner-left-title h2 {
		margin: 0;
		padding: 0px 30px;
	}
	form {
		padding: 10px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}
	.mealplanner-topright {
		flex-grow: 2;
	}
	.mealplanner-bottomright {
		flex-grow: 2;
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
		font-weight: 500;
		margin: 5px;
	}
	.diets {
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
`;
