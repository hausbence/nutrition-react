import styled from "styled-components";

export const StyledHeader = styled.div`
	text-align: center;
	position: fixed;
	z-index: 100;
	top: 0;
	padding: 0 0 10px 0;
	width: 100%;
	height: 50px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
	background: ${({ theme }) => theme.primaryLight};

	.logo {
		width: 300px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
	}

	h1 {
		font-size: 34px;
		font-family: "Courier New", monospace;
		color: ${({ theme }) => theme.primaryDark};
	}
	.username {
		display: flex;
		align-items: center;
		position: fixed;
		height: 50px;
		top: 0;
		right: 0;
		margin-right: 30px;
	}
	.username a {
		color: ${({ theme }) => theme.primaryDark};
		font-size: 24px;
		font-weight: 600;
	}
`;
