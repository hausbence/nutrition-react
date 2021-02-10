import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { Burger, Menu } from "../../components";

const Header = () => {
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
			<h1>nutri-core</h1>
			<Burger open={open} setOpen={setOpen} />
			<Menu open={open} setOpen={setOpen} />
			<input
				type="text"
				placeholder="Search recipes..."
				id="input"
				onKeyPress={handleKeyPress}
			/>
		</StyledHeader>
	);
};

export default Header;
