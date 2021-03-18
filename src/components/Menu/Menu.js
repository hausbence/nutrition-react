import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import Toggler from "../Toggler";
import { useDarkMode } from "../useDarkMode";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo from "../../resources/Nutri-core-03.png";

const Menu = ({ open, ...props }) => {
	const [theme, themeToggler] = useDarkMode();

	const isHidden = open ? true : false;
	const tabIndex = isHidden ? 0 : -1;
	let history = useHistory();
	const [cookies, removeCookie] = useCookies(["email", "username"]);

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
			<img src={logo} alt="logo" width="100" />
			<input
				type="text"
				placeholder="Search recipes..."
				id="input"
				onKeyPress={handleKeyPress}
			/>
			<div className="menupoints">
				<Link to={"/"} tabIndex={tabIndex}>
					Recipes
				</Link>
				<Link to={"/mealplanner"} tabIndex={tabIndex}>
					Meal-Planner
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
					<Link to="/plans" tabIndex={tabIndex}>
						Plans
					</Link>
				) : null}
				{cookies.email ? (
					<Link to="/" onClick={handleLogout}>
						Logout
					</Link>
				) : null}
			</div>

			<span />
			<span />
			<Toggler theme={theme} toggleTheme={themeToggler} />
		</StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired,
};

export default Menu;
