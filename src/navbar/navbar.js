import React from "react"
import { Container } from "react-bootstrap/"
import { Navbar, Nav, Row, Col } from "react-bootstrap/"
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';


const totoro = "./totoro.webp"

export default function TopLinks() {
    return (
        <Container fluid className="blocky">
            <Row className="blocky">
                <Col className="blocky">
                    <Navbar bg="light" expand="lg" style={{ height: "100%" }}>
                        <Navbar.Brand href="#home">
                            <img src={require(`${totoro}`)} height="100px" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto flexy">
                                <Nav.Link
                                    href="https://www.linkedin.com/in/francisconovoaparada/">
                                    <FaLinkedinIn size="45px" />
                                </Nav.Link>
                                <Nav.Link
                                    href="https://github.com/Francisco-Novoa">
                                    <AiOutlineGithub size="45px" />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>

            </Row>

        </Container>
    )
}