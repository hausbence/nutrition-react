import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useCookies } from "react-cookie";
import DayMeals from "../components/DayMeals";
import { StyledPlans } from "./Plans.styled";

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
		<StyledPlans>
			{days !== undefined && days.length !== 0 ? (
				Object.values(days).map((day, i) => <DayMeals key={i} day={day} />)
			) : (
				<div>
					<h3>No weekly plans yet!</h3>
				</div>
			)}
		</StyledPlans>
	);
	return content;
};

export default Plans;
