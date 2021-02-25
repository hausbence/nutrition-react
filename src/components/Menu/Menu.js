import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import Toggler from "../Toggler";
import { useDarkMode } from "../useDarkMode";
import { useHistory } from "react-router-dom";

const Menu = ({ open, ...props }) => {
	const [theme, themeToggler] = useDarkMode();

	const isHidden = open ? true : false;
	const tabIndex = isHidden ? 0 : -1;
	let history = useHistory();

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
				<span aria-hidden="true">💁🏻‍♂️</span>
				Recipes
			</Link>
			<Link to={"/registration"} tabIndex={tabIndex}>
				<span aria-hidden="true">💸</span>
				Register
			</Link>
			<Link to={"/login"} tabIndex={tabIndex}>
				<span aria-hidden="true">📩</span>
				Login
			</Link>
			<Toggler theme={theme} toggleTheme={themeToggler} />
		</StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired,
};

export default Menu;
