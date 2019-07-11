import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SelectionPage from "./SelectionPage";
import Leaderboard from "./Leaderboard";
import Schedule from "./Schedule";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Schedule} />
        <Route path="/selection-page" component={SelectionPage} />
        <Route path="/leaderboard" component={Leaderboard} />
      </Router>
    );
  }
}

export default App;
