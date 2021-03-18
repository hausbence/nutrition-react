import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useCookies } from "react-cookie";

const Plans = () => {
	const API_URL = "http://localhost:8080/plan/generated/";

	const [cookies] = useCookies(["username"]);
	const [days, setDays] = useState([]);

	let content;

	useEffect(() => {
		Axios.get(API_URL + cookies.username).then((res) => {
			if (res) {
				setDays(res.data.days);
			}
		});
		// eslint-disable-next-line
	}, []);

	console.log(days);

	content = (
		<div className="plans-container">
			{days !== undefined && days.length !== 0
				? Object.values(days).map((day) => console.log(day))
				: ""}
		</div>
	);
	return content;
};

export default Plans;
