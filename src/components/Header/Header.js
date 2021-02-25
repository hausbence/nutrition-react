import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { Burger, Menu } from "../../components";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import FocusLock from "react-focus-lock";

const Header = () => {
	let history = useHistory();
	const [open, setOpen] = useState(false);
	const node = useRef();
	const menuId = "main-menu";

	useOnClickOutside(node, () => setOpen(false));

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
			<div ref={node}>
				<FocusLock disabled={!open}>
					<Burger open={open} setOpen={setOpen} aria-controls={menuId} />
					<Menu open={open} setOpen={setOpen} id={menuId} />
				</FocusLock>
			</div>
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
