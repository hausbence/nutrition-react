import styled from "styled-components";

export const StyledHeader = styled.div`
	text-align: center;
	// position: fixed;
	// top: 0;
	width: 100%;
	wrap: nowrap;
	background: ${({ theme }) => theme.primaryLight};

	h1 {
		color: ${({ theme }) => theme.primaryDark};
	}
`;
