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
		background: ${({ theme }) => theme.background};
		border-radius: 5px;
	}
	.nutrition-table caption {
		display: none;
	}
	.nutrition-table {
		padding: 10px;
		border-collapse: collapse;
	}
	.nutrition-table button {
		width: 100%;
	}
	.nutrition-table td {
		padding: 1px 5px;
	}
	.nutrition-table tr {
		border: 1px solid ${({ theme }) => theme.background};
	}
`;
