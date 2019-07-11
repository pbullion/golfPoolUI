import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Schedule extends Component {
  state = {};

  handleClick = tournament => {
    console.log(tournament);
    this.props.selectTournament(tournament);
    console.log(this.props.tournament);
    this.props.history.push("/selection-page");
  };

  componentWillMount() {
    fetch("http://localhost:3001/schedule")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ tournaments: data.tournaments });
      });
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
        {this.state.tournaments && this.state.tournaments.map(tournament => {
          return (
            <p
              key={tournament.id}
              onClick={() => this.handleClick(tournament)}
            >
              {tournament.name}
            </p>
          );
        })}
      </Container>
    );
  }
}

export default withRouter(Schedule);
