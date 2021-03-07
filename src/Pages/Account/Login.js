import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";
import { useCookies } from "react-cookie";

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};

const Login = (props) => {
	const API_URL = "http://localhost:8080/api/auth/";

	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookie, removeCookie] = useCookies([
		"id",
		"email",
		"username",
		"user",
	]);
	const form = useRef();
	const checkBtn = useRef();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const submitLogin = (username, password) => {
		return axios
			.post(API_URL + "signin", {
				username,
				password,
			})
			.then((response) => {
				if (response.data.accessToken) {
					setCookie("email", response.data.email, { path: "/" });
					setCookie("username", response.data.username, { path: "/" });
					setCookie("id", response.data.id, { path: "/" });
					setCookie("user", response.data, { path: "/" });
					// localStorage.setItem("user", JSON.stringify(response.data)); //localstorage
				}

				return response.data;
			});
	};

	const handleLogin = (e) => {
		setMessage("");
		setLoading(true);

		submitLogin(username, password).then(
			() => {
				props.history.push("/profile");
				window.location.reload();
			},
			(error) => {
				const resMessage =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();

				setLoading(false);
				setMessage(resMessage);
			}
		);
	};

	return (
		<div className="form">
			<h2 className="loginHeader">Login</h2>
			<form onSubmit={handleLogin}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					className="input-style"
					name="username"
					value={username}
					placeholder="Username"
					onChange={onChangeUsername}
					required
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="input-style"
					name="password"
					value={password}
					placeholder="Password"
					onChange={onChangePassword}
					required
				/>
				<input type="submit" />
			</form>
			{message}
		</div>
	);
};

export default Login;
