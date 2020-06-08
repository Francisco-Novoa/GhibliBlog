import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css"
import Banner from "./banner/banner";
import Sidebar from "./sidebar/sidebar";
import Main from "./main/main"
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import Getter from "./services/Api"
import { Container, Row, Col, } from "react-bootstrap/"

function App() {
  const [local, setLocal] = useState([])
  const [reset,setReset]=useState(true)
  const resources = async (resource) => {
    const aux = await Getter.getResource(resource)
    setLocal({ arr:aux, "kind": resource })
  }

  useEffect(() => {
    resources("films")
  }, [])

  return (
    <Container fluid style={{display:"flex", alignContent:"space-between", flexDirection:"column" }}>
      <Navbar />
      <Row>
        <Col>
          <Banner />
        </Col>
      </Row>
      <Row style={{paddingRight:"0.5rem", display:"flex", justifyContent:"space-between"}}>
        <Col sm={2}  >
          <Sidebar resources={resources} setReset={setReset} reset={reset} />
        </Col>
        <Col sm={10} style={{ display:"flex",alignContent:"center"}}>
          <Main resources={local} reset={reset} />
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
