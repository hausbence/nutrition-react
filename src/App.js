import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import React from "react";


const App= () => {
    return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={MainPage}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
