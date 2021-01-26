import styled from "styled-components";

export const StyledHeader = styled.div`
	text-align: center;
	background: ${({ theme }) => theme.primaryLight};

	h1 {
		color: ${({ theme }) => theme.primaryDark};
	}
`;
