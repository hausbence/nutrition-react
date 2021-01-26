import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";

import MainPage from "./pages/MainPage";
import Search from "./pages/Search";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header";
import { lightTheme, darkTheme } from "./components/Themes";
import Toggler from "./components/Toggler";
import SingleRecipe from "./pages/SingleRecipe";

import { Burger, Menu } from "./components";

const App = () => {
	const [theme, themeToggler] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	const [open, setOpen] = useState(false);
	const node = useRef();

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<Router>
				<Switch>
					<React.Fragment>
						<div className="App">
							<Header />
							<div ref={node}>
								<Burger open={open} setOpen={setOpen} />
								<Menu open={open} setOpen={setOpen} />
							</div>
							<Toggler theme={theme} toggleTheme={themeToggler} />
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
