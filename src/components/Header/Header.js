import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { Burger, Menu } from "../../components";

const Header = ({ theme }) => {
	let history = useHistory();
	const [open, setOpen] = useState(false);

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			history.push({
				pathname: `/recipes/${document.getElementById("input").value}`,
			});
		}
	};

	return (
		<StyledHeader>
			<Burger open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen} />
			<h1>Nutri App</h1>
			<input
				type="text"
				placeholder="Search"
				id="input"
				onKeyPress={handleKeyPress}
			/>
		</StyledHeader>
	);
};

export default Header;
