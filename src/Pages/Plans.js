import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useCookies } from "react-cookie";

const Plans = () => {
	const API_URL = "http://localhost:8080/plan/generated/";

	const [cookies] = useCookies(["username"]);
	const [meals, setMeals] = useState([]);

	let content;

	useEffect(() => {
		Axios.get(API_URL + cookies.username).then((res) => {
			if (res) {
				setMeals(res.data.days);
			}
		});
		// eslint-disable-next-line
	}, []);

	console.log(meals);

	content = (
		<div>
			<br />
			<br />
			<p>test</p>
		</div>
	);
	return content;
};

export default Plans;
