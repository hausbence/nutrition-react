import styled from "styled-components";

export const StyledNutritionPanel = styled.div`
	.macronutrients {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.macro-item {
		display: block;
		padding: 10px 35px;
		margin: 0 10px 15px 10px;
		background: ${({ theme }) => theme.inBetween};
		border-radius: 5px;
	}
	.nutrition-table caption {
		display: none;
	}
	.nutrition-table table {
		font-size: 28px;
		padding: 10px;
		border-collapse: collapse;
	}
	.nutrition-table button {
		width: 100%;
        font-size: 24px;
	}
	.nutrition-table td {
		padding: 3px 10px;
	}
	.nutrition-table tr:nth-child(even) {
        background: ${({ theme }) => theme.inBetween};
`;
