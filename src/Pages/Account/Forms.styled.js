import styled from "styled-components";

export const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
	color: ${({ theme }) => theme.primaryDark};
	label {
		display: none;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin: 10px;
		padding: 30px;
		background: ${({ theme }) => theme.primaryLight};
		border-radius: 5px;
	}

	.input-fields {
		padding: 10px;
	}

	.field {
		padding: 10px;
	}

	input {
		padding: 10px 20px;
		width: 300px;
		border: none;
		border-radius: 5px;
	}

	input[type="submit"] {
		width: 100px;
		cursor: pointer;
	}
`;
