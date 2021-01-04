import React, { useState } from "react";
import RandomRecipes from "./RandomRecipes";

const MainPage = (props) => {
    const [url] = useState(
        "http://localhost:8080/recipes/random"
    )

    return (
        <React.Fragment>
            <div>
                <div className="App">
                    <RandomRecipes url={url}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainPage;