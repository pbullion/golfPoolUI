import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Leaderboard extends Component {
  state = {
    isLoading: false,
    users: [
      {
        first_name: "Patrick",
        last_name: "Bullion",
        tier1: {
          value: "085c0b40-e456-4d46-b011-f992a4ee8a68",
          label: "Adam Hadwin"
        },
        tier2a: {
          value: "72b41f76-a9a1-4ff9-8364-b8a21129bd54",
          label: "Scott Piercy"
        },
        tier2b: {
          value: "92544280-0438-4f43-a5f3-f3a21ea55157",
          label: "Brian Harman"
        },
        tier3: {
          value: "3abaad6d-ea04-49aa-b330-aa1b450c1b36",
          label: "Sam Saunders"
        },
        tier4: {
          value: "f572509d-7c6d-48b9-9c65-a20f6d2d492b",
          label: "Sam Burns"
        }
      },
      {
        first_name: "RJ",
        last_name: "Turner",
        tier1: {
          value: "085c0b40-e456-4d46-b011-f992a4ee8a68",
          label: "Adam Hadwin"
        },
        tier2a: {
          value: "80ce67a7-fba9-482f-b7e0-9c0eb23425d4",
          label: "Charlie Danielson"
        },
        tier2b: {
          value: "80ce67a7-fba9-482f-b7e0-9c0eb23425d4",
          label: "Brian Harman"
        },
        tier3: {
          value: "3abaad6d-ea04-49aa-b330-aa1b450c1b36",
          label: "Sam Saunders"
        },
        tier4: {
          value: "f572509d-7c6d-48b9-9c65-a20f6d2d492b",
          label: "Sam Burns"
        }
      },
      {
        first_name: "Ally",
        last_name: "Fowler",
        tier1: {
          value: "085c0b40-e456-4d46-b011-f992a4ee8a68",
          label: "Adam Hadwin"
        },
        tier2b: {
          value: "80ce67a7-fba9-482f-b7e0-9c0eb23425d4",
          label: "Charlie Danielson"
        },
        tier4: {
          value: "92544280-0438-4f43-a5f3-f3a21ea55157",
          label: "Brian Harman"
        },
        tier2a: {
          value: "3abaad6d-ea04-49aa-b330-aa1b450c1b36",
          label: "Sam Saunders"
        },
        tier3: {
          value: "16d8796c-7927-4d1b-b926-b2d906dbc64e",
          label: "Robert Streb"
        }
      },
      {
        first_name: "Jon",
        last_name: "Lacour",
        tier1: {
          value: "085c0b40-e456-4d46-b011-f992a4ee8a68",
          label: "Adam Hadwin"
        },
        tier2b: {
          value: "72b41f76-a9a1-4ff9-8364-b8a21129bd54",
          label: "Scott Piercy"
        },
        tier4: {
          value: "92544280-0438-4f43-a5f3-f3a21ea55157",
          label: "Brian Harman"
        },
        tier2a: {
          value: "4dc6e9c7-dd5b-4cf2-a7fe-b9c94c7a9110",
          label: "Jason Dufner"
        },
        tier3: {
          value: "f572509d-7c6d-48b9-9c65-a20f6d2d492b",
          label: "Sam Burns"
        }
      },
    ],
    leaderboard: []
  };

  componentWillMount() {
    console.log(this.props.tournament.id);
    this.state.isLoading = true;
    fetch(`http://52.37.61.234:3004/leaderboard/${this.props.tournament.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.state.leaderboard = data.leaderboard;
        this.state.tournamentName = data.name;
        console.log(this.state.leaderboard);
        for (let i = 0; i < this.state.users.length; i++) {
          console.log(this.state.users[i]);
          this.state.users[i].tier1Score = this.state.leaderboard.filter(
            obj => {
              return obj.id === this.state.users[i].tier1.value;
            }
          );
          this.state.users[i].tier2aScore = this.state.leaderboard.filter(
            obj => {
              return obj.id === this.state.users[i].tier2a.value;
            }
          );
          this.state.users[i].tier2bScore = this.state.leaderboard.filter(
            obj => {
              return obj.id === this.state.users[i].tier2b.value;
            }
          );
          this.state.users[i].tier3Score = this.state.leaderboard.filter(
            obj => {
              return obj.id === this.state.users[i].tier3.value;
            }
          );
          this.state.users[i].tier4Score = this.state.leaderboard.filter(
            obj => {
              return obj.id === this.state.users[i].tier4.value;
            }
          );
        }
        console.log(this.state.users);
      }).then(res => {
      for (let x = 0; x < this.state.users.length; x++) {
        if (this.state.users[x].tier1Score[0].rounds[0]) {
          this.state.users[x].thursdayTotal = this.state.users[x].tier1Score[0].rounds[0].score + this.state.users[x].tier2aScore[0].rounds[0].score + this.state.users[x].tier2bScore[0].rounds[0].score + this.state.users[x].tier3Score[0].rounds[0].score + this.state.users[x].tier4Score[0].rounds[0].score;
          this.state.users[x].total = this.state.users[x].thursdayTotal;
        }
        if (this.state.users[x].tier1Score[0].rounds[1]) {
          this.state.users[x].fridayTotal = this.state.users[x].tier1Score[0].rounds[1].score + this.state.users[x].tier2aScore[0].rounds[1].score + this.state.users[x].tier2bScore[0].rounds[1].score + this.state.users[x].tier3Score[0].rounds[1].score + this.state.users[x].tier4Score[0].rounds[1].score;
          this.state.users[x].total = this.state.users[x].total + this.state.users[x].fridayTotal;
        }
        if (this.state.users[x].tier1Score[0].rounds[2]) {
          this.state.users[x].saturdayTotal = this.state.users[x].tier1Score[0].rounds[2].score + this.state.users[x].tier2aScore[0].rounds[2].score + this.state.users[x].tier2bScore[0].rounds[2].score + this.state.users[x].tier3Score[0].rounds[2].score + this.state.users[x].tier4Score[0].rounds[2].score;
          this.state.users[x].total = this.state.users[x].total + this.state.users[x].saturdayTotal;
        }
        if (this.state.users[x].tier1Score[0].rounds[3]) {
          console.log(this.state.users[x]);
          this.state.users[x].sundayTotal = this.state.users[x].tier1Score[0].rounds[3].score + this.state.users[x].tier2aScore[0].rounds[3].score + this.state.users[x].tier2bScore[0].rounds[3].score + this.state.users[x].tier3Score[0].rounds[3].score + this.state.users[x].tier4Score[0].rounds[3].score;
          this.state.users[x].total = this.state.users[x].total + this.state.users[x].sundayTotal;
        }
      }
    }).then(result => {
      // this.state.users.sort(function(a, b) {return a.total - b.total})
      this.state.isLoading = false;
      this.forceUpdate();
    })
  }

  render() {
    return (
      <Container fluid>
        <h1>{this.state.tournamentName}</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Tier 1</th>
              <th scope="col">1</th>
              <th scope="col">2</th>
              <th scope="col">3</th>
              <th scope="col">4</th>
              <th scope="col">Tier 2</th>
              <th scope="col">1</th>
              <th scope="col">2</th>
              <th scope="col">3</th>
              <th scope="col">4</th>
              <th scope="col">Tier 2</th>
              <th scope="col">1</th>
              <th scope="col">2</th>
              <th scope="col">3</th>
              <th scope="col">4</th>
              <th scope="col">Tier 3</th>
              <th scope="col">1</th>
              <th scope="col">2</th>
              <th scope="col">3</th>
              <th scope="col">4</th>
              <th scope="col">Tier 4</th>
              <th scope="col">1</th>
              <th scope="col">2</th>
              <th scope="col">3</th>
              <th scope="col">4</th>
              <th scope="col">THU</th>
              <th scope="col">FRI</th>
              <th scope="col">SAT</th>
              <th scope="col">SUN</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {!this.state.isLoading > 0
              ? this.state.users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <p>
                          {user.first_name} {user.last_name}
                        </p>
                      </td>
                      <td>
                        <p>{user.tier1.label}</p>
                      </td>
                      <td>
                        <p>
                          {!user.tier1Score[0].rounds.length > 0
                            ? null
                            : user.tier1Score[0].rounds[0].score}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier1Score[0].rounds.length > 1
                            ? user.tier1Score[0].rounds[1].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier1Score[0].rounds.length > 2
                            ? user.tier1Score[0].rounds[2].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier1Score[0].rounds.length > 3
                            ? user.tier1Score[0].rounds[3].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>{user.tier2a.label}</p>
                      </td>
                      <td>
                        <p>
                          {user.tier2aScore[0].rounds[0]
                            ? user.tier2aScore[0].rounds[0].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier2aScore[0].rounds[1]
                            ? user.tier2aScore[0].rounds[1].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier2aScore[0].rounds[2]
                            ? user.tier2aScore[0].rounds[2].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier2aScore[0].rounds[3]
                            ? user.tier2aScore[0].rounds[3].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>{user.tier2b.label}</p>
                      </td>
                      <td>
                        <p>
                          {user.tier2bScore[0].rounds[0]
                            ? user.tier2bScore[0].rounds[0].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier2bScore[0].rounds[1]
                            ? user.tier2bScore[0].rounds[1].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier2bScore[0].rounds[2]
                            ? user.tier2bScore[0].rounds[2].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier2bScore[0].rounds[3]
                            ? user.tier2bScore[0].rounds[3].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>{user.tier3.label}</p>
                      </td>
                      <td>
                        <p>
                          {user.tier3Score[0].rounds[0]
                            ? user.tier3Score[0].rounds[0].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier3Score[0].rounds[1]
                            ? user.tier3Score[0].rounds[1].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier3Score[0].rounds[2]
                            ? user.tier3Score[0].rounds[2].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier3Score[0].rounds[3]
                            ? user.tier3Score[0].rounds[3].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>{user.tier4.label}</p>
                      </td>
                      <td>
                        <p>
                          {user.tier4Score[0].rounds[0]
                            ? user.tier4Score[0].rounds[0].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier4Score[0].rounds[1]
                            ? user.tier4Score[0].rounds[1].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier4Score[0].rounds[2]
                            ? user.tier4Score[0].rounds[2].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.tier4Score[0].rounds[3]
                            ? user.tier4Score[0].rounds[3].score
                            : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.thursdayTotal ? user.thursdayTotal : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.fridayTotal ? user.fridayTotal : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.saturdayTotal ? user.saturdayTotal : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.sundayTotal ? user.sundayTotal : null}
                        </p>
                      </td>
                      <td>
                        <p>
                          {user.total}
                        </p>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </Container>
    );
  }
}

export default Leaderboard;
