import React, { useState } from "react";
import ListRecipes from "./ListRecipes";
import {useHistory} from "react-router-dom";

const MainPage = (props) => {
    const [url] = useState(
        "http://localhost:8080/recipes/random"
    )

    return (
        <React.Fragment>
            <div>
                <div className="App">
                    <ListRecipes url={url}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainPage;