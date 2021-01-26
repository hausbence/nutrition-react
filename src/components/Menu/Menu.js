import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import Toggler from "../Toggler";
import { useDarkMode } from "../useDarkMode";

const Menu = ({ open, ...props }) => {
	const [theme, themeToggler] = useDarkMode();

	const isHidden = open ? true : false;
	const tabIndex = isHidden ? 0 : -1;

	return (
		<StyledMenu open={open} aria-hidden={!isHidden} {...props}>
			<Link to={"/"} tabIndex={tabIndex}>
				<span aria-hidden="true">💁🏻‍♂️</span>
				About us
			</Link>
			<Link to={"/"} tabIndex={tabIndex}>
				<span aria-hidden="true">💸</span>
				Pricing
			</Link>
			<Link to={"/"} tabIndex={tabIndex}>
				<span aria-hidden="true">📩</span>
				Contact
			</Link>
			<Toggler theme={theme} toggleTheme={themeToggler} />
		</StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired,
};

export default Menu;
