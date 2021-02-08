import styled from "styled-components";

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.primaryLight};
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
	}
	a {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: ${({ theme }) => theme.primaryDark};
		text-decoration: none;
		transition: color 0.3s linear;
		@media (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 1.5rem;
			text-align: center;
		}
		&:hover {
			color: ${({ theme }) => theme.primaryHover};
		}
	}
`;
