import React, { useState, useRef } from "react";
import { StyledHeader } from "./Header.styled";
import { Burger, Menu } from "../../components";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import FocusLock from "react-focus-lock";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Header = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	const menuId = "main-menu";
	const [cookies] = useCookies(["username"]);
	useOnClickOutside(node, () => setOpen(false));

	return (
		<StyledHeader>
			<div ref={node}>
				<FocusLock disabled={!open}>
					<Burger open={open} setOpen={setOpen} aria-controls={menuId} />
					<Menu open={open} setOpen={setOpen} id={menuId} />
				</FocusLock>
			</div>
			<div className="logo">
				<h1>nutri-core</h1>
			</div>
			<div className="username">
				{cookies.email ? <Link to="plans">{cookies.username}</Link> : null}
			</div>
		</StyledHeader>
	);
};

export default Header;
