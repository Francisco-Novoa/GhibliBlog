import React from "react"
import { Button } from "react-bootstrap"
import { GiFilmSpool } from "react-icons/gi"
import { BsFillPeopleFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { RiAliensLine } from "react-icons/ri"
import { FaCar } from "react-icons/fa"

export default function Sidebar({ resources, setReset, reset }) {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <Button
                    block variant="outline-light"
                    className="bigger-buttons"
                    onClick={() => { resources("films");setReset(!reset) }}
                >
                    <GiFilmSpool size="30px" />
                    <br />
                    Peliculas
                </Button>
            </div>
            <div className="sidebar-item">
                <Button
                    block variant="outline-light"
                    onClick={() => { resources("people");setReset(!reset)  }}
                    className="bigger-buttons"
                >
                    <BsFillPeopleFill size="30px" />
                    <br />
                    Personajes
                 </Button>
            </div>
            <div className="sidebar-item">
                <Button
                    block variant="outline-light"
                    onClick={() => { resources("locations");setReset(!reset)  }}
                    className="bigger-buttons"
                >
                    <MdLocationOn size="30px" />
                    <br />
                        Ubicaciones
                 </Button>
            </div>
            <div className="sidebar-item">
                <Button
                    onClick={() => { resources("species");setReset(!reset)  }}
                    block variant="outline-light"
                    className="bigger-buttons"
                >
                    <RiAliensLine size="30px" />
                    <br />
                      Especies
                 </Button>
            </div>
            <div className="sidebar-item">
                <Button
                    block variant="outline-light"
                    onClick={() => { resources("vehicles");setReset(!reset)  }}
                    className="bigger-buttons"
                >
                    <FaCar size="30px" />
                    <br />
                     Vehiculos
                 </Button>
            </div>

        </div>

    )
}