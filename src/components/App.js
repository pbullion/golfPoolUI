import React, { Component } from 'react';
import './App.css';
import SelectionPage from './SelectionPage';
import Leaderboard from "./Leaderboard/Leaderboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<SelectionPage />*/}
        <Leaderboard/>
      </div>
    );
  }
}

export default App;
