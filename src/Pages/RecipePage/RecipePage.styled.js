import styled from "styled-components";

export const StyledRecipePage = styled.div`
	max-width: 1000px;
	margin: 85px auto;
	color: ${({ theme }) => theme.primaryDark};

	.tab-header {
		display: flex;
		border-radius: 3px;
		height: 50px;
	}
	.tab-header .tab-header-menu {
		font-size: 21px;
		margin: 1px;
		text-align: center;
		flex: 1;
		height: 100%;
		line-height: 50px;
		white-space: nowrap;
		border-radius: 5px;
		cursor: pointer;
		background: ${({ theme }) => theme.primaryLight};
		border-bottom: 3px solid ${({ theme }) => theme.background};
	}

	.tab-header .active {
		border-bottom: 3px solid ${({ theme }) => theme.primaryLight};
		border-radius: 5px 5px 0 0;
	}

	.tab-header .tab-header-menu:hover {
		background: #4cb8c4; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			to right,
			#4cb8c4,
			#3cd3ad
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to right,
			#4cb8c4,
			#3cd3ad
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	.tab-content {
		margin: 1px;
		background: ${({ theme }) => theme.primaryLight};
		min-height: 400px;
		position: relative;
		border-radius: 0 0 5px 5px;
	}
	.tab-child {
		font-size: 20px;
		font-family: europa-boldregular, sans-serif;
		padding: 40px 30px;
	}
	.tab-child a {
		color: ${({ theme }) => theme.primaryDark};
		text-decoration: underline;
	}
	.tab-child a:hover {
		color: ${({ theme }) => theme.toggleBorder};
		text-decoration: underline;
	}
`;
