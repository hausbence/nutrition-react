import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import AuthService from "../services/auth.service";

const Register = (props) => {
	const { register, handleSubmit } = useForm();

	const handleRegister = (e) => {
		e.preventDefault();
		console.log(e);
		// AuthService.register(username, email, password).then(
		// 	(response) => {
		// 		setMessage(response.data.message);
		// 		setSuccessful(true);
		// 	},
		// 	(error) => {
		// 		const resMessage =
		// 			(error.response &&
		// 				error.response.data &&
		// 				error.response.data.message) ||
		// 			error.message ||
		// 			error.toString();

		// 		setMessage(resMessage);
		// 		setSuccessful(false);
		// 	}
		// );
	};

	return (
		<div className="form">
			<br />
			<br />
			<br />
			<br />
			<form onSubmit={handleSubmit(handleRegister)}>
				<input
					name="firstName"
					ref={register({ required: true, maxLength: 20 })}
				/>
				<input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
				<input name="age" type="number" ref={register({ min: 18, max: 99 })} />
				<input type="submit" />
			</form>
		</div>
	);
};

export default Register;
