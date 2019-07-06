import React, { Component } from "react";
import Select from "react-select";
import { Button, Container } from "react-bootstrap";

class SelectionPage extends Component {
  state = {
    tierOne: [],
    tierTwo: [],
    tierThree: [],
    tierFour: []
  };

  handleChangeTier1 = selectedTier1 => {
    this.setState({ selectedTier1: selectedTier1 });
    console.log(`Option selected:`, selectedTier1);
  };

  handleChangeTier2a = selectedTier2a => {
    this.setState({ selectedTier2a: selectedTier2a });
    console.log(`Option selected:`, selectedTier2a);
  };

  handleChangeTier2b = selectedTier2b => {
    this.setState({ selectedTier2b: selectedTier2b });
    console.log(`Option selected:`, selectedTier2b);
  };

  handleChangeTier3 = selectedTier3 => {
    this.setState({ selectedTier3: selectedTier3 });
    console.log(`Option selected:`, selectedTier3);
  };

  handleChangeTier4 = selectedTier4 => {
    this.setState({ selectedTier4: selectedTier4 });
    console.log(`Option selected:`, selectedTier4);
  };

  handleSubmit = () => {
    alert(
      `You have selected: ${this.state.selectedTier1.label}, ${this.state.selectedTier2a.label}, ${this.state.selectedTier2b.label}, ${this.state.selectedTier3.label}, ${this.state.selectedTier4.label}`
    );
  };

  componentWillMount() {
    fetch("http://localhost:3001/wgr")
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.players.length; i++) {
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
          if (data.players[i].rank >= 51) {
            this.state.tierFour.push({
              value: data.players[i].id,
              label:
                data.players[i].first_name + " " + data.players[i].last_name
            });
          }
        }
      });
    console.log(this.state.tierOne);
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
        <div style={{ width: 500, marginBottom: 20 }}>
          <h1>Select One Tier 1 Player</h1>
          <Select
            onChange={this.handleChangeTier1}
            options={this.state.tierOne}
          />
        </div>
        <div style={{ width: 500, marginBottom: 20 }}>
          <h1>Select Two Tier 2 Player</h1>
          <Select
            onChange={this.handleChangeTier2a}
            options={this.state.tierTwo}
          />
          <Select
            onChange={this.handleChangeTier2b}
            options={this.state.tierTwo}
          />
        </div>
        <div style={{ width: 500, marginBottom: 20 }}>
          <h1>Select One Tier 3 Player</h1>
          <Select
            onChange={this.handleChangeTier3}
            options={this.state.tierThree}
          />
        </div>
        <div style={{ width: 500, marginBottom: 20 }}>
          <h1>Select One Tier 4 Player</h1>
          <Select
            onChange={this.handleChangeTier4}
            options={this.state.tierFour}
          />
        </div>
        <Button size="lg" variant="success" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Container>
    );
  }
}

export default SelectionPage;
