import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { StyledForm } from "./Forms.styled";

const Login = (props) => {
	const API_URL = "http://localhost:8080/api/auth/";

	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookie, removeCookie] = useCookies([
		"id",
		"email",
		"username",
		"user",
	]);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// eslint-disable-next-line no-unused-vars
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
				console.log(cookies);
			}
		);
	};

	return (
		<StyledForm>
			<h2 className="loginHeader">Login</h2>
			<form onSubmit={handleLogin}>
				<div className="input-fields">
					<div className="field">
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
					</div>
					<div className="field">
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
					</div>
				</div>
				<input type="submit" value="Submit" />
			</form>
			{message}
		</StyledForm>
	);
};

export default Login;
