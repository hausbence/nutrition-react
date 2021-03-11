import styled from "styled-components";

export const StyledMealCalendar = styled.div`
	margin-top: 15px;
	background: ${({ theme }) => theme.primaryLight};
	border-radius: 10px;
	.day-name {
		text-align: center;
	}
`;
