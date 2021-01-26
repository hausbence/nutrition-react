import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";

import MainPage from "./pages/MainPage";
import Search from "./pages/Search";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import SingleRecipe from "./pages/SingleRecipe";

import { Header } from "./components";

const App = () => {
	// const [storage, setStorage] = useState(null);
	// const [theme, setTheme] = useState("light");
	const themeMode = "light" ? lightTheme : darkTheme;

	React.useEffect(() => {
		window.addEventListener("storage", () => {
			const theme = localStorage.getItem("theme");
			console.log(theme);
		});
	}, []);

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<Router>
				<Switch>
					<React.Fragment>
						<div className="App">
							<Header />
							<Route exact path="/" component={MainPage} />
							<Route exact path="/recipes/:searchTerm" component={Search} />
							<Route exact path="/recipe/:id" component={SingleRecipe} />
						</div>
					</React.Fragment>
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
