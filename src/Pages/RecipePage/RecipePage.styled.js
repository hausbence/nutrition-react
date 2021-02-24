import styled from "styled-components";

export const StyledRecipePage = styled.div`
	max-width: 1000px;
	margin: 80px auto;
	color: ${({ theme }) => theme.primaryDark};

	.tab-header {
		list-style: none;
		background: #fff;
		border-radius: 36px;
		line-height: 25px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	}
	.tab-header li {
		display: inline;
		padding: 7px 12px;
		border-radius: 36px;
		line-height: 35px;

		cursor: pointer;
	}

	.tab-header li.active,
	.tab-header li:hover {
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
		height: 400px;
		background: #fff;
		border: 1px solid #dedeed;
		margin: 12px;
		width: 100%;
		position: relative;
	}

	.tab-child {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
