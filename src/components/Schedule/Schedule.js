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
        <h3>Rules</h3>
        <h4>$25 Entry </h4>
        <ul>
          <li>
            Pick one golfer from rankings 1-10 (Teir 1), two from 11-30 (Tier
            2), one from 31-50 (Tier 3), and one (1) from 51+ (Tier 4)
          </li>
          <li>
            Each player’s score in relation to par ( +\- ) will be added
            together
          </li>
          <li>Lowest score in relation to par will win</li>
          <li>
            If a player misses the cut, they will receive their own scores from
            days 1 & 2 and the highest score recorded in the field on days 3 & 4
          </li>
          <li>
            Withdraw or DQ, player will receive highest score in the field the
            day of and thereafter
          </li>
          <li>
            Tie Breaker: The cumulative score of just your Tier 3 & 4 players
            (lowest cumulative score wins)
          </li>
          <li>
            BONUS **If you pick the Champion, you will receive a 3-shot
            reduction upon final scoring**
          </li>
          <li><a href="https://venmo.com/code?user_id=1761698973220865011">Venmo: jonathan-lacour, 713-376-0030</a></li>
        </ul>
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
                <h3 key={tournament.id}>{tournament.name}</h3>
                <div>
                  <Button
                    style={{ marginRight: 15 }}
                    variant="primary"
                    onClick={() => this.handleClickSignUp(tournament)}
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => this.handleClickLeaderboard(tournament)}
                  >
                    Leaderboard
                  </Button>
                </div>
              </div>
            );
          })}
      </Container>
    );
  }
}

export default withRouter(Schedule);
