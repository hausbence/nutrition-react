import styled from "styled-components";

export const StyledHeader = styled.div`
	text-align: center;
	position: fixed;
	top: 0;
	padding: 0 0 5px 0;
	width: 100%;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
	background: ${({ theme }) => theme.primaryLight};

	h1 {
		margin: 0px !important;
		color: ${({ theme }) => theme.toggleBorder};
	}
`;
