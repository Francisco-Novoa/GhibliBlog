import React, { useState, useEffect } from "react"
import { Row, Button } from "react-bootstrap"
import { Container } from "react-bootstrap/"
import { DisplayFilm, DisplayLocations, DisplayPeople, DisplaySpecies, DisplayVehicles } from "./displays"

function Buttons({ min, setMin, max, setMax }) {
    const handleUp = () => {
        setMin(min + 9)
        setMax(max + 9)
    }
    const handleDown = () => {
        setMin(min - 9)
        setMax(max - 9)
    }
    return (
        <Row style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", paddingRight: "2rem", paddingLeft: "2rem" }}>
            {
                min > 0 ?
                    <Button
                        variant="outline-light"
                        style={{
                            minWidth: "12rem",
                            color: "#D3D3D3",
                            backgroundColor: "#4f6baa"
                        }}
                        onClick={() => { handleDown() }}
                    >
                        <span style={{ color: "#D3D3D3" }}> Anterior</span>
                    </Button>
                    :
                    <Button
                        variant="outline-light"
                        style={{
                            minWidth: "12rem",
                            color: "#D3D3D3",
                            backgroundColor: "#808080"
                        }}
                    >
                        <span style={{ color: "grey" }}> Anterior</span>
                    </Button>
            }
            <Button
                variant="outline-light"
                style={{
                    minWidth: "12rem",
                    color: "#D3D3D3",
                    backgroundColor: "#4f6baa"
                }}
                onClick={() => { handleUp() }}
            >
                <span style={{ color: "#D3D3D3" }}> Siguiente</span>
            </Button>
        </Row>
    )
}


export default function Main({ resources, reset }) {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(9)
    const zero = () => {
        setMin(0)
        setMax(9)
    }
    useEffect(() => {
        zero()
    }, [reset])
    return (
        <Container fluid style={{ display: "flex", flexDirection: "column" }}>
            <Buttons min={min} setMin={setMin} max={max} setMax={setMax} />
            <Row style={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "flex-center" }}>
                {
                    !!resources &&
                        resources.kind === "films" ?
                        resources.arr.filter((elem, i) => { return i >= min && i < max }).map((elem, i) => {
                            return (
                                <DisplayFilm
                                    title={elem.title}
                                    description={elem.description}
                                    director={elem.director}
                                    producer={elem.producer}
                                    release_date={elem.release_date}
                                    rt_score={elem.release_date}
                                    key={elem.id} />
                            )
                        })
                        : resources.kind === "people" ?
                            resources.arr.filter((elem, i) => { return i >= min && i < max }).map((elem, i) => {
                                return (
                                    <DisplayPeople
                                        name={elem.name}
                                        gender={elem.gender}
                                        age={elem.age}
                                        eye_color={elem.eye_color}
                                        hair_color={elem.hair_color}
                                        film={elem.films}
                                        key={elem.id}
                                    />
                                )
                            })
                            : resources.kind === "locations" ?
                                resources.arr.filter((elem, i) => { return i >= min && i < max }).map((elem, i) => {
                                    return (
                                        <DisplayLocations
                                            name={elem.name}
                                            climate={elem.climate}
                                            surface_water={elem.surface_water}
                                            terrain={elem.terrain}
                                            film={elem.films}
                                            key={elem.id}
                                        />
                                    )
                                })
                                : resources.kind === "species" ?
                                    resources.arr.filter((elem, i) => { return i >= min && i < max }).map((elem, i) => {
                                        return (
                                            <DisplaySpecies
                                                name={elem.name}
                                                classification={elem.classification}
                                                eye_colors={elem.eye_colors}
                                                hair_colors={elem.hair_colors}
                                                key={elem.id}

                                            />
                                        )
                                    })
                                    : resources.kind === "vehicles" ?
                                        resources.arr.filter((elem, i) => { return i >= min && i < max }).map((elem, i) => {
                                            return (
                                                <DisplayVehicles
                                                    name={elem.name}
                                                    description={elem.classification}
                                                    length={elem.eye_colors}
                                                    vehicle_class={elem.hair_colors}
                                                    key={elem.id}

                                                />
                                            )
                                        })
                                        : "Loading!!!"
                }
            </Row>
        </Container>
    )
}