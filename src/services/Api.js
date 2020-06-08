import axios from "axios"
import logger from "./logger"

const baseUrl = " https://ghibliapi.herokuapp.com/"

const getResource = async (resource) => {
    try {
        console.log(`${baseUrl}${resource}`)
        const request = await axios.get(`${baseUrl}${resource}`)
        logger.info(request.data)
        return request.data
    } catch (error) {
        logger.err(error)
    }
}

const getName = async (array) => {
    try {
        const request = await axios.get(array[0])
        return request.data.title
    } catch (error) {
        logger.err(error)
    }
}

export default {getResource,getName}