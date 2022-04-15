import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function BasicComponents() {
  return (
    <>
      <div className="section section-basic-components">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="5" md="7">
              <h2 className="title">Benifits of travelling</h2>
              <h6 className="category">The core elements of your life</h6>
              <h5 className="description">
                In our journey of life, open your heart and explore the beauty
                and nature of life.Explore all the heavenly places found next to
                you. ..........Live or Die ......You get only one
              </h5>
            </Col>
            <Col lg="6" md="12">
              <div className="image-container">
                <img
                  alt="..."
                  className="components-macbook"
                  src={require("assets/img/world.jpg")}
                ></img>
                <img
                  alt="..."
                  className="table-img"
                  src={require("assets/img/s1.jpg")}
                ></img>
                <img
                  alt="..."
                  className="share-btn-img"
                  src={require("assets/img/presentation-page/share-btn.jpg")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-btn-img"
                  src={require("assets/img/presentation-page/s2.jpg")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-img"
                  src={require("assets/img/presentation-page/s3.jpg")}
                ></img>
                <img
                  alt="..."
                  className="social-img"
                  src={require("assets/img/presentation-page/social-row.jpg")}
                ></img>
                <img
                  alt="..."
                  className="linkedin-btn-img"
                  src={require("assets/img/presentation-page/linkedin-btn.jpg")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BasicComponents;
