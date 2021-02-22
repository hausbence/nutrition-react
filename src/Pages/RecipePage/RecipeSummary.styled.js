import styled from "styled-components";

export const StyledRecipeSummary = styled.div`
	color: ${({ theme }) => theme.primaryDark};
	max-width: 1000px;
	display: flex;
	margin: 0 auto;
	h2 {
		font-size: 34px;
	}
	span {
		font-size: 26px;
	}
	.recipe_summ_left {
		display: flex;
		flex-direction: column;
	}
	.recipe_sum_info {
		display: flex;
		justify-content: space-evenly;
	}
`;
