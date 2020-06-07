import React from "react"
import { Card, CardDeck, Col, Row, Button } from "react-bootstrap"
import { Container } from "react-bootstrap/"

function Display() {
    return (
        <Card border="dark" style={{ minWidth: '16rem', width: "17rem", maxWidth: "18rem", marginBottom: "0.25rem" }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}


function FBbutton() {
    return (
        <Row style={{paddingTop:"0.25rem", paddingBottom:"0.25rem"}}>
            <Col md={{ span: 2 }}>
                <Button variant="outline-dark" block>
                    Previous
                </Button>
            </Col>
            <Col md={{ span: 2, offset: 8 }}>
                <Button variant="outline-dark" block>
                    Next
                </Button>
            </Col>
        </Row>
    )
}

export default function Main() {
    return (
        <Container fluid>
            <FBbutton/>
            <Row>
                <Col>
                    <CardDeck>
                        <Display />
                        <Display />
                        <Display />
                        <Display />
                        <Display />
                        <Display />
                        <Display />
                        <Display />
                        <Display />
                        <Display />
                        <Display />
                        <Display />
                    </CardDeck>
                </Col>
            </Row>
            <FBbutton/>
        </Container>
    )
}