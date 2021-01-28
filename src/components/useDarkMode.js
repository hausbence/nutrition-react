import { useEffect, useState, useContext } from "react";
import { ThemeStyleContext } from "../ThemeStyleContext";

export const useDarkMode = () => {
	const themeContext = useContext(ThemeStyleContext);

	const [theme, setTheme] = useState("light");
	const [mountedComponent, setMountedComponent] = useState(false);
	const setMode = (mode) => {
		window.localStorage.setItem("theme", mode);
		themeContext.setTheme(mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === "light" ? setMode("dark") : setMode("light");
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		localTheme ? setTheme(localTheme) : setMode("light");
		setMountedComponent(true);
		// eslint-disable-next-line
	}, []);

	return [theme, themeToggler, mountedComponent];
};
