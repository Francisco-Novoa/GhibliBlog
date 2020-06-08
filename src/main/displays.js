import React, { useEffect, useState } from "react"
import { Card, Col } from "react-bootstrap"
import Api from "../services/Api"

export function DisplayFilm({ title, description, director, producer, release_date, rt_score }) {

    return (
        <Col md={{ span: 4 }}
            lg={{ span: 3 }}
            sm={{ span: 6 }}
            style={{
                minWidth: '14rem',
                marginBottom: "0.25rem",
                marginRight: "0.125rem",
                marginLeft: "0.125rem",
                padding: 0
            }} >
            <Card border="dark" style={{ width: "100%", height: "100%" }}>
                <Card.Body>
                    <Card.Title> <strong>  {title} </strong></Card.Title>
                    <span><strong>Director: </strong> {director}</span>
                    <br />
                    <span><strong>Productor: </strong> {producer}</span>
                    <br />
                    <span><strong>Año: </strong> {release_date}</span>
                    <br />
                    <span><strong>Rotten Tomatoes: </strong>{rt_score}</span>
                    <br />
                    <span><strong>Description:</strong> "{description}" </span>
                </Card.Body>
            </Card>
        </Col>

    )
}
export function DisplayPeople({ name, gender, age, eye_color, hair_color, film }) {
    const [filmName, setFilmName] = useState(null)

    const namegetter = async () => {
        const name = await Api.getName(film)
        setFilmName(name)
    }

    useEffect(() => {
        namegetter()
    }, [])
    return (
        <Col
            md={{ span: 4 }}
            lg={{ span: 3 }}
            sm={{ span: 6 }}
            style={{
                minWidth: '14rem',
                marginBottom: "0.25rem",
                marginRight: "0.125rem",
                marginLeft: "0.125rem",
                padding: 0
            }} >
            <Card border="dark" style={{ width: "100%", height: "100%" }}>
                <Card.Body>
                    <Card.Title><strong>{name}</strong></Card.Title>
                    <Card.Text>
                        <span><strong>Gender: </strong>{gender}</span>
                        <br />
                        <span><strong>Age: </strong>{age}</span>
                        <br />
                        <span><strong>Eye Color: </strong>{eye_color}</span>
                        <br />
                        <span><strong>Hair Color: </strong>{hair_color}</span>
                        <br />
                        {!!filmName &&
                            <span><strong>Film: </strong>{filmName}</span>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export function DisplayLocations({ name, climate, surface_water, terrain, film }) {
    const [filmName, setFilmName] = useState(null)

    const namegetter = async () => {
        const name = await Api.getName(film)
        setFilmName(name)
    }

    useEffect(() => {
        namegetter()
    }, [])
    return (
        <Col
            md={{ span: 4 }}
            lg={{ span: 3 }}
            sm={{ span: 6 }}
            style={{
                minWidth: '14rem',
                marginBottom: "0.25rem",
                marginRight: "0.125rem",
                marginLeft: "0.125rem",
                padding: 0
            }} >
            <Card border="dark" style={{ width: "100%", height: "100%" }}>
                <Card.Body>
                    <Card.Title><strong>{name}</strong></Card.Title>
                    <Card.Text>
                        <span><strong>Climate: </strong>{climate}</span>
                        <br />
                        <span><strong>Surface Water: </strong>{surface_water}</span>
                        <br />
                        <span><strong>Terrain: </strong>{terrain}</span>
                        <br />
                        {!!filmName &&
                            <span><strong>Film: </strong>{filmName}</span>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export function DisplaySpecies({ name, classification, eye_colors, hair_colors }) {
    return (
        <Col
            md={{ span: 4 }}
            lg={{ span: 3 }}
            sm={{ span: 6 }}
            style={{
                minWidth: '14rem',
                marginBottom: "0.25rem",
                marginRight: "0.125rem",
                marginLeft: "0.125rem",
                padding: 0
            }} >
            <Card border="dark" style={{ width: "100%", height: "100%" }}>
                <Card.Body style={{ display: "flex", alignContent: "center", flexDirection: "column" }}>
                    <Card.Title><strong>{name}</strong></Card.Title>
                    <Card.Text style={{ display: "flex", alignContent: "center", flexDirection: "column" }}>
                        <span><strong>Clasificación: </strong>{classification}</span>
                        <br />
                        <span><strong>Color de ojos: </strong>{eye_colors}</span>
                        <br />
                        <span><strong>Color de cabello: </strong>{hair_colors}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export function DisplayVehicles({ name, description, length, vehicle_class }) {
    return (
        <Col
            md={{ span: 4 }}
            lg={{ span: 3 }}
            sm={{ span: 6 }}
            style={{
                minWidth: '14rem',
                marginBottom: "0.25rem",
                marginRight: "0.125rem",
                marginLeft: "0.125rem",
                padding: 0
            }} >
            <Card border="dark" style={{ width: "100%", height: "100%" }}>
                <Card.Body style={{ display: "flex", alignContent: "center", flexDirection: "column" }}>
                    <Card.Title><strong>{name}</strong></Card.Title>
                    <Card.Text style={{ display: "flex", alignContent: "center", flexDirection: "column" }}>
                        <span><strong>Clasificación: </strong>{vehicle_class}</span>
                        <br />
                        <span><strong>Color de ojos: </strong>{length}</span>
                        <br />
                        <span><strong>Color de cabello: </strong>{description}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}