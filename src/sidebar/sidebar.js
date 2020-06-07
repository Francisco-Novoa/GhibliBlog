import React from "react"
import { Button } from "react-bootstrap"
import { GiFilmSpool } from "react-icons/gi"
import {BsFillPeopleFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import {RiAliensLine} from "react-icons/ri"
import {FaCar} from "react-icons/fa"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <Button block variant="outline-dark" className="bigger-buttons">
                    <GiFilmSpool size="30px" />
                    <br/>
                    Film
                </Button>
            </div>
            <div className="sidebar-item">
                <Button block variant="outline-dark" className="bigger-buttons">
                    <BsFillPeopleFill size="30px" />
                    <br/>
                     People
                 </Button>
            </div>
            <div className="sidebar-item">
                <Button block variant="outline-dark" className="bigger-buttons">
                    <MdLocationOn size="30px"/>
                    <br/>
                        Locations
                 </Button>
            </div>
            <div className="sidebar-item">
                <Button block variant="outline-dark" className="bigger-buttons">
                    <RiAliensLine size="30px" />
                    <br/>
                      Species
                 </Button>
            </div>
            <div className="sidebar-item">
                <Button block variant="outline-dark" className="bigger-buttons">
                    <FaCar size="30px"/>
                    <br/>
                     Vehicles
                 </Button>
            </div>

        </div>

    )
}