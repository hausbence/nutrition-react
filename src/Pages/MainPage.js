import React, { useState } from "react";
import ListRecipes from "./ListRecipes";

const MainPage = (props) => {
    const [url] = useState(
        "http://localhost:8080/recipes/random"
    )

    return (
        <React.Fragment>
            <div className="content">
                <ListRecipes url={url}/>
            </div>
        </React.Fragment>
    )
}

export default MainPage;