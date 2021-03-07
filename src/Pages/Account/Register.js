import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import AuthService from "../services/auth.service";

const Register = (props) => {
	const { register, handleSubmit } = useForm();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [successful, setSuccessful] = useState(false);
	const [message, setMessage] = useState("");

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleRegister = (e) => {
		setMessage("");
		setSuccessful(false);

		AuthService.register(username, email, password).then(
			(response) => {
				setMessage(response.data.message);
				setSuccessful(true);
			},
			(error) => {
				const resMessage =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();

				setMessage(resMessage);
				setSuccessful(false);
			}
		);
	};

	return (
		<div className="form">
			<br />
			<br />
			<br />
			<br />
			<h2 className="loginHeader">Registration</h2>
			<form onSubmit={handleSubmit(handleRegister)}>
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
							minLength="4"
							maxLength="19"
						/>
					</div>
					<div className="field">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							className="input-style"
							name="email"
							value={email}
							placeholder="Email"
							onChange={onChangeEmail}
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
							minLength="6"
							maxLength="40"
						/>
					</div>
				</div>
				<input type="submit" />
			</form>
			{message}
		</div>
	);
};

export default Register;
