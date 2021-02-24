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
`;
