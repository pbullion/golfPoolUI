import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  state = {
  };


  componentWillMount() {
  }

  render() {
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <Row>
          <h1>GolfaPOOLooza</h1>
        </Row>
        <Row>
          <h2>Create your own Fantasy Golf Pool</h2>
        </Row>
      </Container>
    );
  }
}

export default withRouter(HomePage);
