import React, { createContext, useState } from "react";

export const ThemeStyleContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeStyleContext.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			{children}
		</ThemeStyleContext.Provider>
	);
};
