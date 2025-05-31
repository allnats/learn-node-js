import request from "postman-request"
import utils from "./utils.js"

const apiKeyFiles = utils.apiKeyFiles
const weatherstackKey = utils.getAPIKey(apiKeyFiles.weatherstack)
const mapboxKey = utils.getAPIKey(apiKeyFiles.mapbox)
const query = "Winnipeg"

const mapboxBaseURL = "https://api.mapbox.com/search/geocode/v6/forward"
const mapboxResLimit = 2
const mapboxReq = `${mapboxBaseURL}?q=${query}&limit=${mapboxResLimit}&access_token=${mapboxKey}`

const weatherStackURL = "https://api.weatherstack.com/current"
const weatherStackReq = `${weatherStackURL}?access_key=${weatherstackKey}&query=${query}`



request({
    url: weatherStackReq, json: true
}, (err, res) => {
    if (err) {
        console.log("ERROR: Unable to connect to the weather API.")
        console.log(err.message)
    } else if (res.body.error) {
        console.log("ERROR: Could not find weather API location.")
    } else {
        
        const currentLocation = res.body.location
        const localtime = new Date(currentLocation.localtime)
        const currentWeather = res.body.current

        const output = [
            `The weather in ${currentLocation.name}, ${currentLocation.region}`,
            `at ${localtime.getHours()}:${localtime.getMinutes()}`,
            `is ${currentWeather.temperature} degrees Celsius.\n`
        ]

        console.log(output.join(" "))
    }
})

request({
    url:mapboxReq, json:true
}, (err, res) => {
    if (err) {
        console.log(err.message)
    } else if (res.body.features.length === 0) {
        console.log("ERROR: Could not find location coordinates.")
    } else {
        const result = res.body.features[0].properties
        const coordinates = result.coordinates
        console.log(`Full address: ${result.full_address}`)
        console.log(coordinates)
    }
})