import { readFileSync } from "node:fs"

const WEATHERSTACK_FILENAME = "weatherstack.apikey"
const MAPBOX_FILENAME = "mapbox.apikey"

const apiKeyFiles = {
    weatherstack: WEATHERSTACK_FILENAME,
    mapbox: MAPBOX_FILENAME
}

/**
 * 
 * Fetches the Weatherstack API Key.
 * 
 * @param {string} filename 
 * @returns string
 */

// TODO: Validate the filename.
const getAPIKey = (filename=WEATHERSTACK_FILENAME) => {
    let apiKey = ""
    try {
        let fileBuffer = readFileSync(filename)
        apiKey = fileBuffer.toString()
    } catch (err) {
        console.log(`ERROR reading API key from ${filename}.`)
        console.log(err.message)
    }

    return apiKey 
}

export default { getAPIKey, apiKeyFiles }