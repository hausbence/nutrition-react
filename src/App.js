import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";

import MainPage from "./pages/MainPage";
import SingleRecipe from "./pages/SingleRecipe";
import Search from "./pages/Search";

import { Header } from "./components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

import { ThemeStyleContext } from "./ThemeStyleContext";

const App = () => {
	const themeContext = useContext(ThemeStyleContext);
	const [theme, setTheme] = useState("");

	const themeMode = theme === "light" ? lightTheme : darkTheme;

	React.useEffect(() => {
		setTheme(localStorage.getItem("theme"));
	}, [themeContext]);

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
