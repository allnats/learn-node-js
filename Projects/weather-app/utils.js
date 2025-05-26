import { readFileSync } from "node:fs"

const WEATHERSTACK_FILENAME = "weatherstack.apikey"

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

export default { getAPIKey }