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

    axios.post(`http://52.37.61.234:3004/user/userSelections`, {
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
    fetch(`http://52.37.61.234:3004/tournament-field/${this.props.tournament.id}`)
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
            <Form.Label>Select Two Tier 2 Player</Form.Label>
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
