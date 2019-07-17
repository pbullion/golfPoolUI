import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Leaderboard.css";

class Leaderboard extends Component {
  state = {
    isLoading: false,
    users: [],
    leaderboard: []
  };

  componentWillMount() {
    this.state.isLoading = true;
    fetch(`http://18.237.192.82:3004/user/userSelections`)
      .then(res => res.json())
      .then(userSelections => {
        this.state.users = userSelections;
        fetch(
          `http://18.237.192.82:3004/leaderboard/`
        )
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.state.leaderboard = data.leaderboard;
            this.state.tournamentName = data.name;
            for (let i = 0; i < this.state.users.length; i++) {
              console.log(this.state.users[i]);
              this.state.users[i].tier1Score = this.state.leaderboard.filter(
                obj => {
                  return obj.id === this.state.users[i].tier1_id;
                }
              );
              this.state.users[i].tier2aScore = this.state.leaderboard.filter(
                obj => {
                  return obj.id === this.state.users[i].tier2a_id;
                }
              );
              this.state.users[i].tier2bScore = this.state.leaderboard.filter(
                obj => {
                  return obj.id === this.state.users[i].tier2b_id;
                }
              );
              this.state.users[i].tier3Score = this.state.leaderboard.filter(
                obj => {
                  return obj.id === this.state.users[i].tier3_id;
                }
              );
              this.state.users[i].tier4Score = this.state.leaderboard.filter(
                obj => {
                  return obj.id === this.state.users[i].tier4_id;
                }
              );
            }
            console.log(this.state.users);
            for (let x = 0; x < this.state.users.length; x++) {
              if (this.state.users[x].tier1Score.length > 0) {
                if (this.state.users[x].tier1Score[0].rounds[0]) {
                  this.state.users[x].thursdayTotal =
                    this.state.users[x].tier1Score[0].rounds[0].score +
                    this.state.users[x].tier2aScore[0].rounds[0].score +
                    this.state.users[x].tier2bScore[0].rounds[0].score +
                    this.state.users[x].tier3Score[0].rounds[0].score +
                    this.state.users[x].tier4Score[0].rounds[0].score;
                  this.state.users[x].total = this.state.users[x].thursdayTotal;
                }
                if (this.state.users[x].tier1Score[0].rounds[1]) {
                  this.state.users[x].fridayTotal =
                    this.state.users[x].tier1Score[0].rounds[1].score +
                    this.state.users[x].tier2aScore[0].rounds[1].score +
                    this.state.users[x].tier2bScore[0].rounds[1].score +
                    this.state.users[x].tier3Score[0].rounds[1].score +
                    this.state.users[x].tier4Score[0].rounds[1].score;
                  this.state.users[x].total =
                    this.state.users[x].total + this.state.users[x].fridayTotal;
                }
                if (this.state.users[x].tier1Score[0].rounds[2]) {
                  this.state.users[x].saturdayTotal =
                    this.state.users[x].tier1Score[0].rounds[2].score +
                    this.state.users[x].tier2aScore[0].rounds[2].score +
                    this.state.users[x].tier2bScore[0].rounds[2].score +
                    this.state.users[x].tier3Score[0].rounds[2].score +
                    this.state.users[x].tier4Score[0].rounds[2].score;
                  this.state.users[x].total =
                    this.state.users[x].total +
                    this.state.users[x].saturdayTotal;
                }
                if (this.state.users[x].tier1Score[0].rounds[3]) {
                  console.log(this.state.users[x]);
                  this.state.users[x].sundayTotal =
                    this.state.users[x].tier1Score[0].rounds[3].score +
                    this.state.users[x].tier2aScore[0].rounds[3].score +
                    this.state.users[x].tier2bScore[0].rounds[3].score +
                    this.state.users[x].tier3Score[0].rounds[3].score +
                    this.state.users[x].tier4Score[0].rounds[3].score;
                  this.state.users[x].total =
                    this.state.users[x].total + this.state.users[x].sundayTotal;
                }
              } else {
                this.state.users[x].tier1Score.push({ rounds: [] });
                this.state.users[x].tier2aScore.push({ rounds: [] });
                this.state.users[x].tier2bScore.push({ rounds: [] });
                this.state.users[x].tier3Score.push({ rounds: [] });
                this.state.users[x].tier4Score.push({ rounds: [] });
              }
            }
            // this.state.users.sort(function(a, b) {return a.total - b.total})
            this.state.isLoading = false;
            this.forceUpdate();
          });
      });
  }

  render() {
    return (
      <Container fluid>
        <h1>{this.state.tournamentName}</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Paid</th>
              <th scope="col">TOTAL</th>
              <th scope="col">THU</th>
              <th scope="col">FRI</th>
              <th scope="col">SAT</th>
              <th scope="col">SUN</th>
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
                      <td id="fontAwesome">
                        {user.paid ? (
                          <FontAwesomeIcon
                            style={{ textAlign: "center" }}
                            icon={faCheck}
                          />
                        ) : null}
                      </td>
                      <td>
                        <p>{user.total}</p>
                      </td>
                      <td>
                        <p>{user.thursdayTotal ? user.thursdayTotal : null}</p>
                      </td>
                      <td>
                        <p>{user.fridayTotal ? user.fridayTotal : null}</p>
                      </td>
                      <td>
                        <p>{user.saturdayTotal ? user.saturdayTotal : null}</p>
                      </td>
                      <td>
                        <p>{user.sundayTotal ? user.sundayTotal : null}</p>
                      </td>
                      <td>
                        <p>{user.tier1_name}</p>
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
                        <p>{user.tier2a_name}</p>
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
                        <p>{user.tier2b_name}</p>
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
                        <p>{user.tier3_name}</p>
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
                        <p>{user.tier4_name}</p>
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
