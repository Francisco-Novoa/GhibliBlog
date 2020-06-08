import React from "react"
import { Container, Row, Col, Nav } from "react-bootstrap/"
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

export default function Footer() {
    return (
        <Container fluid>
            <Row style={{ height: "100px" , display:"flex" }}>
                <Col>
                    <Nav className="mr-auto between">
                        <Nav.Link
                            href="https://www.linkedin.com/in/francisconovoaparada/">
                            <FaLinkedinIn size="15px" />
                        </Nav.Link>
                        <Nav.Link
                            href="https://github.com/Francisco-Novoa">
                            <AiOutlineGithub size="15px" />
                        </Nav.Link>
                        <span className="text-muted">
                            Pagina realizada usando
                        <a href="https://ghibliapi.herokuapp.com/"> <strong> Ghibli Api</strong></a>,
                        <a href="https://react-bootstrap.netlify.app/"> React-Bootstrap</a>,
                        <a href="https://react-icons.github.io/react-icons/"> React-Icons</a> y
                        <a href="https://es.reactjs.org/docs/getting-started.html"> Reactjs</a>.
                        </span>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}