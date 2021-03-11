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
	.ingredients-container {
		display: flex;
	}
	.ingredient-item {
		display: block;
	}
	.weekly-plan {
		display: flex;
		max-width: 1400px;
		margin: auto;
	}
`;
