import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import * as season from "./tournaments.js";

class Schedule extends Component {
  state = {
    tournaments: season.schedule.tournaments
  };

  handleClickSignUp = tournament => {
    console.log(tournament);
    this.props.selectTournament(tournament);
    console.log(this.props.tournament);
    this.props.history.push("/selection-page");
  };

  handleClickLeaderboard = tournament => {
    console.log(tournament);
    this.props.selectTournament(tournament);
    console.log(this.props.tournament);
    this.props.history.push("/leaderboard");
  };

  componentWillMount() {
    // fetch("http://52.37.61.234:3004/schedule")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({ tournaments: data.tournaments });
    //   });
    console.log(this.state.tournaments);
  }

  render() {
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1>2019 PGA TOUR SCHEDULE</h1>
        {this.state.tournaments &&
          this.state.tournaments.map(tournament => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                    marginBottom: 25
                }}
              >
                <h3
                  key={tournament.id}
                >
                  {tournament.name}
                </h3>
                <div>
                  <Button style={{marginRight: 15}} variant="primary" onClick={() => this.handleClickSignUp(tournament)}>Sign Up</Button>
                  <Button variant="success" onClick={() => this.handleClickLeaderboard(tournament)}>Leaderboard</Button>
                </div>
              </div>
            );
          })}
      </Container>
    );
  }
}

export default withRouter(Schedule);
