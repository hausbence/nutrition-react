import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import Toggler from "../Toggler";
import { useDarkMode } from "../useDarkMode";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const Menu = ({ open, ...props }) => {
	const [theme, themeToggler] = useDarkMode();

	const isHidden = open ? true : false;
	const tabIndex = isHidden ? 0 : -1;
	let history = useHistory();
	const [cookies, removeCookie] = useCookies([
		"email",
		"password",
		"id",
		"username",
	]);

	const handleLogout = () => {
		removeCookie("email", "");
		removeCookie("password", "");
		removeCookie("id", 0);
		removeCookie("username", "");
	};
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			history.push({
				pathname: `/recipes/${document.getElementById("input").value}`,
			});
		}
	};
	return (
		<StyledMenu open={open} aria-hidden={!isHidden} {...props}>
			<input
				type="text"
				placeholder="Search recipes..."
				id="input"
				onKeyPress={handleKeyPress}
			/>
			<Link to={"/"} tabIndex={tabIndex}>
				Recipes
			</Link>
			{!cookies.email ? (
				<Link to="/registration" tabIndex={tabIndex}>
					Register
				</Link>
			) : null}
			{!cookies.email ? (
				<Link to="/login" tabIndex={tabIndex}>
					Login
				</Link>
			) : null}
			{cookies.email ? (
				<Link to="/profile" tabIndex={tabIndex}>
					Profile
				</Link>
			) : null}
			{cookies.email ? (
				<Link to="/" onClick={handleLogout}>
					Logout
				</Link>
			) : null}
			<Toggler theme={theme} toggleTheme={themeToggler} />
			{cookies.email ? (
				<p className="welcome">Welcome, {cookies.username}!</p>
			) : null}
		</StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired,
};

export default Menu;
