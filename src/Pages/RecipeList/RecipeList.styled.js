import styled from "styled-components";

export const StyledRecipeList = styled.div`
	max-width: 1200px;
	margin: 50px auto;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;

	a {
		border: 2px solid transparent;
		border-radius: 30px;
		margin: 40px 20px;
		:hover {
			border-radius: 30px;
			border: 2px solid ${({ theme }) => theme.primaryDark};
			transition: all 0.1s linear;
		}
	}

	.recipe__container {
		height: 700px;
		max-width: 555px;
		text-align: center;
		flex: 1 1 auto;
		overflow: hidden;
	}

	.recipe__container img {
		border-radius: 100px;
	}

	.recipe__container h2 {
		margin: 20px;
		font-size: 34px;
		word-break: break-word;
	}

	.recipe__summary {
		margin: 0 20px;
		font-size: 22px;
	}
`;
