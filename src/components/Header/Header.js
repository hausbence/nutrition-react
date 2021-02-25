import React, { useState, useRef } from "react";
import { StyledHeader } from "./Header.styled";
import { Burger, Menu } from "../../components";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import FocusLock from "react-focus-lock";

const Header = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	const menuId = "main-menu";

	useOnClickOutside(node, () => setOpen(false));

	return (
		<StyledHeader>
			<div className="header">
				<div ref={node}>
					<FocusLock disabled={!open}>
						<Burger open={open} setOpen={setOpen} aria-controls={menuId} />
						<Menu open={open} setOpen={setOpen} id={menuId} />
					</FocusLock>
				</div>
				<h1>nutri-core</h1>
			</div>
		</StyledHeader>
	);
};

export default Header;
