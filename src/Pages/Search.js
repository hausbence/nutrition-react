import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeList from "./RecipeList/RecipeList";

const Search = () => {
	let { searchTerm } = useParams();

	const [searchUrl, setSearchUrl] = useState(
		`https://nutricore.herokuapp.com/recipes/${searchTerm}`
	);

	useEffect(() => {
		if (searchTerm) {
			setSearchUrl(`https://nutricore.herokuapp.com/recipes/${searchTerm}`);
		}
	}, [searchTerm]);

	return <RecipeList url={searchUrl} />;
};

export default Search;
