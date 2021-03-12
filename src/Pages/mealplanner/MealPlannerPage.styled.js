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
		width: 100%;
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
	.dropdown {
		position: relative;
		display: inline-block;
	}
	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		padding: 12px 16px;
		z-index: 1;
	}
	.dropdown:hover .dropdown-content {
		display: block;
	}
`;
