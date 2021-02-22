import styled from "styled-components";

export const StyledRecipeSummary = styled.div`
	font-family: europa-boldregular, sans-serif;
	color: ${({ theme }) => theme.primaryDark};
	max-width: 1000px;
	display: flex;
	margin: 0 auto;
	h2 {
		margin: 0;
		font-size: 34px;
	}
	span {
		font-size: 26px;
	}
	.recipe_summ_left {
		margin: 10px 30px;
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
	img {
		border-radius: 10px;
	}
`;
