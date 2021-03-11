import styled from "styled-components";

let recipeWidth = 170;

export const StyledMeal = styled.div`
	margin: 10px;
	width: ${recipeWidth}px;
	height: ${recipeWidth}px;
	position: relative;
	border-radius: 5px;
	color: #fff;
	.recipe_image {
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
	.title h2 {
		padding: 3px;
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