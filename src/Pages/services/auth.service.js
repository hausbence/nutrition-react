/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://nutricore.herokuapp.com/api/auth/";

const register = (username, email, password) => {
	return axios.post(API_URL + "signup", {
		username,
		email,
		password,
	});
};

const login = (username, password) => {
	return axios
		.post(
			API_URL + "signin",
			{
				username,
				password,
			},
			{ headers: authHeader() }
		)
		.then((response) => {
			if (response.data.accessToken) {
			}

			return response.data;
		});
};

export default {
	register,
	login,
};
