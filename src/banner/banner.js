import React from "react"
const banner = "./banner.jpg"

export default function Banner() {
    return (

        <img id="banner" src={require(`${banner}`)} alt="Ghibli Studio" />

    )
}