import {useHttp} from "../hooks/http";
import React, { useState, useEffect } from "react";


const RecipeList = (props) => {
    let content;
    const [url] = useState(props.url);
    const [recipes, setRecipes] = useState([]);
    const [isLoading, fetchedData] = useHttp(url,[url]);

    useEffect(() => {
        // if (fetchedData) {
        //     if (fetchedData.data.results === undefined) {
        //         setRecipes(fetchedData.data.recipes)
        //     } else {
        //         setRecipes(fetchedData.data.results)
        //     }
        // }
        if (fetchedData) {
            setRecipes(fetchedData.data.recipes)
        }
    }, [fetchedData])

    console.log(recipes)
    console.log(fetchedData)

    if (isLoading) {
        content = (
            <div className="loading">
                <h2>Loading...</h2>
            </div>
        );
    } else {
        content = (
            <React.Fragment>
                <h2>Sorry, I have no results :(</h2>
            </React.Fragment>
        )
    }

    if (recipes) {
        content = (
            <React.Fragment>
                {recipes.map((recipe,i) => (
                    <div className="recipe__container" key={i}>
                        <h2>{recipe.title}</h2>
                        <img src={recipe.image} alt={recipe.image}/>
                    </div>
                ))}
            </React.Fragment>
            )
    }

    return content;
}

export default RecipeList;