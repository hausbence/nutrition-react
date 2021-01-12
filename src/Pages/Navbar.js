import { useHistory } from "react-router-dom";
import React from "react";

const Navbar = () => {
	let history = useHistory();

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			history.push({
				pathname: `/recipes/${document.getElementById("input").value}`,
			});
		}
	};

	return (
		<nav>
			<div>
				<input
					type="text"
					placeholder="Search"
					id="input"
					onKeyPress={handleKeyPress}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
