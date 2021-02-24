import styled from "styled-components";

export const StyledIngredients = styled.div`
	.ingredient-list {
		display: flex;
		flex-wrap: wrap;
	}
	.ingredient-item {
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		width: 150px;
		background-color: #000;
	}
	img {
		max-width: 100px;
		max-height: 100px;
	}
`;
