import styled from "styled-components";

export const StyledIngredients = styled.div`
	.ingredient-list {
		display: flex;
		flex-wrap: wrap;
	}
	.ingredient-item {
		margin: 5px;
		text-align: center;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		align-items: center;
		width: 150px;
		background: ${({ theme }) => theme.background};
		border-radius: 5px;
	}
	.ingredient-item-labels {
		padding: 5px;
	}
	img {
		max-width: 100px;
		max-height: 100px;
		border-radius: 3px;
	}
`;
