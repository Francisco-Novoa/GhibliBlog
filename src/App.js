import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css"
import Banner from "./banner/banner";
import Sidebar from "./sidebar/sidebar";
import Main from "./main/main"
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

import { Container, Row, Col, } from "react-bootstrap/"


function App() {
  return (
      <Container fluid>
          <Navbar />
        <Row>
          <Col>
            <Banner />
          </Col>
        </Row>
        <Row >
          <Col sm={2}  >
            <Sidebar />
          </Col>
          <Col sm={10}>
            <Main />
          </Col>
        </Row>
        <Row>
          <Col >
            <Footer />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
