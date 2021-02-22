import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeList from "./RecipeList/RecipeList";

const Search = () => {
	let { searchTerm } = useParams();

	const [searchUrl, setSearchUrl] = useState(
		`http://localhost:8080/recipes/${searchTerm}`
	);

	useEffect(() => {
		if (searchTerm) {
			setSearchUrl(`http://localhost:8080/recipes/${searchTerm}`);
		}
	}, [searchTerm]);

	return <RecipeList url={searchUrl} />;
};

export default Search;
