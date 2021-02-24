import styled from "styled-components";

export const StyledRecipeSummary = styled.div`
	font-family: europa-boldregular, sans-serif;
	color: ${({ theme }) => theme.primaryDark};
	display: flex;
	margin: 10px auto;
	h2 {
		margin: 0;
		font-size: 34px;
	}
	span {
		font-size: 26px;
	}
	.recipe_summ_left {
		min-width: 385px;
		margin: 20px 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.recipe_sum_info {
		display: flex;
		justify-content: space-between;
	}
	.recipe_sum_info_item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.recipe_sum_info_bold {
		font-weight: 700;
	}
	.recipe_sum_diets {
		font-size: 20px;
		font-weight: 500;
	}
	img {
		border-radius: 10px;
	}
`;
