import React from "react";
import { useHistory } from "react-router-dom";

import Sidebar from "./Sidebar";

import "./Header.css";

const Header = () => {
	let history = useHistory();

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			history.push({
				pathname: `/recipes/${document.getElementById("input").value}`,
			});
		}
	};

	return (
		<div className="header__container">
			<h1>Nutri App</h1>
			<Sidebar />
			<input
				type="text"
				placeholder="Search"
				id="input"
				onKeyPress={handleKeyPress}
			/>
		</div>
	);
};

export default Header;
