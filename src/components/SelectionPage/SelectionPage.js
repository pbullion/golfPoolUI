import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {withRouter} from "react-router-dom";

class SelectionPage extends Component {
  state = {
    // tierOne: [
    //   { value: "848390292302039", label: "Patrick Bullion" },
    //   { value: "23490578389047589023475", label: "Doug Sartin" }
    // ],
    // tierTwo: [
    //   { value: "one", label: "Patrick Bullion" },
    //   { value: "two", label: "Doug Sartin" }
    // ],
    // tierThree: [
    //   { value: "848390292302039", label: "Patrick Bullion" },
    //   { value: "23490578389047589023475", label: "Doug Sartin" }
    // ],
    // tierFour: [
    //   { value: "848390292302039", label: "Patrick Bullion" },
    //   { value: "23490578389047589023475", label: "Doug Sartin" }
    // ],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.formBasicEmail.value)
    console.log(event.target.elements.formFirstName.value)
    console.log(event.target.elements.formLastName.value)
    console.log(event.target.elements.formTier1Player.value)
    console.log(event.target.elements.formTier3Player.value)
    console.log(event.target.elements.formTier4Player.value)
    console.log(event.target.elements.formTier2Player[0].value)
    console.log(event.target.elements.formTier2Player[1].value)
    console.log(this.props.tournament.id)
    // @TODO make call to api to save selections in db then redirect to leaderboard for that tournament
    this.props.history.push('/leaderboard')
  };

  componentWillMount() {
    fetch(`http://localhost:3001/tournament-field/${this.props.tournament.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        for (let i = 0; i < data.players.length; i++) {
          console.log(data.players);
          if (data.players[i].rank <= 10) {
            console.log(data.players[i].rank);
            this.state.tierOne.push({
              value: data.players[i].id,
              label:
                data.players[i].first_name + " " + data.players[i].last_name
            });
          }
          if (data.players[i].rank <= 30 && data.players[i].rank >= 11) {
            this.state.tierTwo.push({
              value: data.players[i].id,
              label:
                data.players[i].first_name + " " + data.players[i].last_name
            });
          }
          if (data.players[i].rank <= 50 && data.players[i].rank >= 31) {
            this.state.tierThree.push({
              value: data.players[i].id,
              label:
                data.players[i].first_name + " " + data.players[i].last_name
            });
          }
          if (data.players[i].rank >= 51 || !data.players[i].rank) {
            this.state.tierFour.push({
              value: data.players[i].id,
              label:
                data.players[i].first_name + " " + data.players[i].last_name
            });
          }
        }
      });
    console.log(this.state.tierOne);
    console.log(this.state.tierTwo);
    console.log(this.state.tier4);
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
                return <option key={player.value} value={player.value}>{player.label}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTier2Player">
            <Form.Label>Select Two Tier 2 Player</Form.Label>
            <Form.Control as="select">
              {this.state.tierTwo.map(player => {
                return <option key={player.value} value={player.value}>{player.label}</option>;
              })}
            </Form.Control>
            <Form.Control as="select">
              {this.state.tierTwo.map(player => {
                return <option key={player.value} value={player.value}>{player.label}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTier3Player">
            <Form.Label>Select One Tier 3 Player</Form.Label>
            <Form.Control as="select">
              {this.state.tierThree.map(player => {
                return <option key={player.value} value={player.value}>{player.label}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTier4Player">
            <Form.Label>Select One Tier 4 Player</Form.Label>
            <Form.Control as="select">
              {this.state.tierFour.map(player => {
                return <option key={player.value} value={player.value}>{player.label}</option>;
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
