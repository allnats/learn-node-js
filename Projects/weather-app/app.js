import request from "postman-request"
import utils from "./utils.js"

const apiKey = utils.getAPIKey()

const weatherStackURL = "https://api.weatherstack.com/current"
const query = "Winnipeg"
const apiReqURL = `${weatherStackURL}?access_key=${apiKey}&query=${query}`

request({
    url: apiReqURL, json: true
}, (err, res) => {
    if (err) {
        console.log(err.message)
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