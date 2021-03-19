import styled from "styled-components";

export const StyledMealCalendar = styled.div`
	width: 800px;
	margin-top: 15px;
	margin-bottom: 20px;
	border-radius: 10px;
	.day-name {
		text-align: center;
	}
	.weekly-plan {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 800px;
	}
	.day-container {
		width: 800px;
		padding: 5px;
		margin: 5px;
		border-radius: 5px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: ${({ theme }) => theme.primaryLight};
	}
	.day-container h3 {
		flex-grow: 2;
		color: ${({ theme }) => theme.primaryDark};
	}
`;
