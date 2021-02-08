import styled from "styled-components";

let recipeWidth = 330 * 0.8;

export const StyledRecipe = styled.div`
	margin: 10px;
	width: ${recipeWidth}px;
	height: ${recipeWidth * 1.62}px;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	.recipe_image {
		display: block;
		width: ${recipeWidth}px;
		height: ${recipeWidth}px;
		object-fit: cover;
	}
	background: ${({ theme, hovered }) =>
		hovered ? theme.primaryDark : theme.primaryLight};
	.image_overlay {
		position: absolute;
		top: 0;
		padding: ${recipeWidth / 2}px 5px 5px 5px;
		height: ${recipeWidth}px;
		width: 100%;
		opacity: ${({ theme, hovered }) => (hovered ? 1 : 0)};
		overflow: hidden;
		background: rgb(0, 0, 0);
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.9)
		);
		transition: 0.5s ease;
	}
	h2 {
		font-size: 21px;
		margin: 8px;
	}
	.title {
		display: flex;
		justify-content: center;
		align-items: center;
		width: ${recipeWidth}px;
		height: 110px;
		overflow: hidden;
		word-break: break-word;
	}

	h6 {
		margin: 0;
	}

	.time {
		position: absolute;
		bottom: 0;
		display: block;
		width: 50px;
		height: 50px;
	}
	.likes {
		position: absolute;
		bottom: 0;
		right: 0;
		display: block;
		width: 50px;
	}
`;
