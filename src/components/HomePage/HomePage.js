import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./HomePage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ProductCard } from "react-ui-cards";

class HomePage extends Component {
  state = {};

  componentWillMount() {}

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
        <Carousel
          showThumbs={false}
          showStatus={false}
          className="presentation-mode"
          infiniteLoop={true}
          autoPlay={true}
          interval={8000}
        >
          <div className="my-slide">
            <img src="https://golfadvisor.brightspotcdn.com/dims4/default/2cfa350/2147483647/strip/true/crop/8412x5024+0+300/resize/1440x860!/format/jpg/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2Ff9%2Ff1%2Ff23a1aeca45b7fc9992a21e32131%2Fp.php" />
            <div className="slide-text">
              <h1>Create a group for The Open Championship</h1>
            </div>
          </div>
          <div className="my-slide">
            <img src="https://miro.medium.com/max/700/1*TG7BbRi_xb81IfWDiCuvEQ.jpeg" />
            <div className="slide-text">
              <h1>Presentation mode</h1>
            </div>
          </div>
        </Carousel>
        <Row>
          <ProductCard
            photos={[
              "https://i.imgur.com/jRVDeI8.jpg",
              "https://i.imgur.com/raPe27t.jpg",
              "https://i.imgur.com/IpEsYSH.jpg"
            ]}
            productName="The Open Championship"
            description="Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet."
            buttonText="Leaderboard"
            rating={3}
            url="https://github.com/nukeop"
          />
        </Row>
      </Container>
    );
  }
}

export default withRouter(HomePage);
