import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import React from "react";
import Search from "./pages/Search";
import Navbar from "./pages/Navbar";

const App= () => {
    return (
    <Router>
      <Switch>
        <div className="App">
            <Navbar/>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/recipes/:searchTerm" component={Search}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
