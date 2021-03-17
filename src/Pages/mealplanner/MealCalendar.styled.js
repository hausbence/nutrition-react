import styled from "styled-components";

export const StyledMealCalendar = styled.div`
	width: 800px;
	margin-top: 15px;
	margin-bottom: 20px;
	border-radius: 10px;
	.day-name {
		font-size: 13px;
		text-align: center;
	}
	.weekly-plan {
		background: ${({ theme }) => theme.primaryLight};
		display: flex;
		justify-content: center;
		width: 800px;
	}
	.day-container {
		padding-bottom: 20px;
	}
`;
