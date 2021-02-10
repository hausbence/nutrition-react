import styled from "styled-components";

export const StyledHeader = styled.div`
	text-align: center;
	position: fixed;
	z-index: 100;
	top: 0;
	padding: 0 0 5px 0;
	width: 100%;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
	background: ${({ theme }) => theme.primaryLight};

	h1 {
		font-size: 34px;
		font-family: "Courier New", monospace;
		margin: 0px !important;
		color: ${({ theme }) => theme.primaryDark};
	}

	input[type="text"] {
		border: none;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
		padding: 4px;
		margin-bottom: 3px;
		border-radius: 5px;
	}
`;
