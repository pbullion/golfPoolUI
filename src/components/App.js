import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SelectionPage from "./SelectionPage";
import Leaderboard from "./Leaderboard";
import Schedule from "./Schedule";
import HomePage from "./HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Schedule} />
        <Route path="/selection-page" component={SelectionPage} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/home" component={HomePage} />
      </Router>
    );
  }
}

export default App;
