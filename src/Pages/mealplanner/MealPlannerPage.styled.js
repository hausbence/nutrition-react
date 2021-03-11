import styled from "styled-components";

export const StyledMealPlannerPage = styled.div`
	margin-top: 100px;
	color: ${({ theme }) => theme.primaryDark};
	.ingredients-container {
		display: flex;
	}
	.ingredient-item {
		display: block;
	}
	.weekly-plan {
		display: flex;
	}
`;
