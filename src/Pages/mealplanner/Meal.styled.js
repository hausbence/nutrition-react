import styled from "styled-components";

let recipeWidth = 200;

export const StyledMeal = styled.div`
	margin: 5px;
	width: ${recipeWidth}px;
	height: ${recipeWidth}px;
	position: relative;
	border-radius: 5px;
	color: #fff;
	.meal-image {
		display: block;
		width: ${recipeWidth}px;
		height: ${recipeWidth}px;
		object-fit: cover;
	}
	background: ${({ theme }) => theme.primaryLight};
	.image_overlay {
		position: absolute;
		top: 0;
		color: ${({ theme }) => theme.text};
		padding: ${recipeWidth / 2}px 5px 5px 5px;
		height: ${recipeWidth}px;
		width: 100%;
	}
	h2 {
		font-size: 13px;
		margin: 4px;
	}
	.title {
		position: absolute;
		bottom: 0;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.9),
			rgba(0, 0, 0, 0.9)
		);
		display: flex;
		justify-content: center;
		align-items: center;
		width: ${recipeWidth}px;
		height: 80px;
		overflow: hidden;
		word-break: break-word;
	}
`;
