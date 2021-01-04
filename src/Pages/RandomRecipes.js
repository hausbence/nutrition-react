import {useHttp} from "../http";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";


const RandomRecipes = (props) => {
    let content;
    const [url] = useState(props.url);
    const [recipes, setRecipes] = useState([]);
    const [isLoading, fetchedData] = useHttp(url,url);

    useEffect(() => {
        if(fetchedData) {
            setRecipes(fetchedData.data.recipes)
        }
    }, [fetchedData])

    console.log(recipes)

    if (isLoading) {
        content = (
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden"/>
            </div>
        );
    }
    else {
        content = (
            <React.Fragment>
                <h2>Sorry, I have no results:(</h2>
            </React.Fragment>
        )
    }

    if (recipes) {
        if (recipes.length > 0) {
            content = (
                <React.Fragment>
                    {recipes.map((recipe,i) => (
                        <div key={i}>
                            <h2>{recipe.title}</h2>
                            <img src={recipe.image} alt={recipe.image}/>
                        </div>
                    ))}
                </React.Fragment>
            )
        }else if (isLoading) {
            return content
        }
    }

    return content;
}

export default RandomRecipes;