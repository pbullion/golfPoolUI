import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import axios from "axios";

class SelectionPage extends Component {
  state = {
    tierOne: [],
    tierTwo: [],
    tierThree: [],
    tierFour: []
  };

  handleSubmit = event => {
    let self = this;
    event.preventDefault();
    console.log(event.target.elements.formTier1Player.value);
    console.log(event.target.elements.formTier2Player);
    console.log(event.target.elements.formTier2Player[0].value);
    console.log(event.target.elements.formTier2Player[1].value);
    console.log(event.target.elements.formTier3Player.value);
    console.log(event.target.elements.formTier4Player.value);
    let email = event.target.elements.formBasicEmail.value;
    let first_name = event.target.elements.formFirstName.value;
    let last_name = event.target.elements.formLastName.value;
    let tournament_id = this.props.tournament.id;
    let tier1 = this.state.golfers.find(golfer => golfer.id === event.target.elements.formTier1Player.value);
    let tier2a = this.state.golfers.find(golfer => golfer.id === event.target.elements.formTier2Player[0].value);
    let tier2b = this.state.golfers.find(golfer => golfer.id === event.target.elements.formTier2Player[1].value);
    let tier3 = this.state.golfers.find(golfer => golfer.id === event.target.elements.formTier3Player.value);
    let tier4 = this.state.golfers.find(golfer => golfer.id === event.target.elements.formTier4Player.value);

    axios.post(`http://34.217.60.211:3004/user/userSelections`, {
      first_name, last_name, email, tournament_id, tier1, tier2a, tier2b, tier3, tier4
    }, {
      headers: {
        'content-type': 'application/json'
      }
    })
        .then(function (response) {
          self.props.history.push("/leaderboard");
        })
        .catch(function (error) {
          console.log('error', error)
        })
  };

  componentWillMount() {
    fetch(`http://34.217.60.211:3004/tournament-field/${this.props.tournament.id}`)
      .then(response => response.json())
      .then(data => {
        console.log("********************");
        console.log(data);
        this.state.golfers = data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].rank <= 10) {
            console.log(data[i].rank);
            this.state.tierOne.push({
              value: data[i].id,
              label: data[i].first_name + " " + data[i].last_name
            });
          }
          if (data[i].rank <= 30 && data[i].rank >= 11) {
            this.state.tierTwo.push({
              value: data[i].id,
              label: data[i].first_name + " " + data[i].last_name
            });
          }
          if (data[i].rank <= 50 && data[i].rank >= 31) {
            this.state.tierThree.push({
              value: data[i].id,
              label: data[i].first_name + " " + data[i].last_name
            });
          }
          if (data[i].rank >= 51 || !data[i].rank) {
            this.state.tierFour.push({
              value: data[i].id,
              label: data[i].first_name + " " + data[i].last_name
            });
          }
        }
        this.forceUpdate();
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
        <h1>{this.props.tournament.name && this.props.tournament.name}</h1>
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
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First Name" />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last Name" />
          </Form.Group>
          <Form.Group controlId="formTier1Player">
            <Form.Label>Select One Tier 1 Player</Form.Label>
            <Form.Control as="select">
              {this.state.tierOne.map(player => {
                return (
                  <option key={player.value} value={player.value}>
                    {player.label}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTier2Player">
            <Form.Label>Select Two Tier 2 Players</Form.Label>
            <Form.Control as="select">
              {this.state.tierTwo.map(player => {
                return (
                  <option key={player.value} value={player.value}>
                    {player.label}
                  </option>
                );
              })}
            </Form.Control>
            <Form.Control as="select">
              {this.state.tierTwo.map(player => {
                return (
                  <option key={player.value} value={player.value}>
                    {player.label}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTier3Player">
            <Form.Label>Select One Tier 3 Player</Form.Label>
            <Form.Control as="select">
              {this.state.tierThree.map(player => {
                return (
                  <option key={player.value} value={player.value}>
                    {player.label}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTier4Player">
            <Form.Label>Select One Tier 4 Player</Form.Label>
            <Form.Control as="select">
              {this.state.tierFour.map(player => {
                return (
                  <option key={player.value} value={player.value}>
                    {player.label}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Button size="lg" variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SelectionPage);
