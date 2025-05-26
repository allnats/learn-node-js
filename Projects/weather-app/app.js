import request from "postman-request"
import utils from "./utils.js"

const apiKey = utils.getAPIKey()

const weatherStackURL = "https://api.weatherstack.com/current"
const query = "Winnipeg"
const apiReq = `${weatherStackURL}?access_key=${apiKey}&query=${query}`

request(apiReq, (err, res) => {
    if (err) {
        console.log(err.message)
    } else {
        const data = JSON.parse(res.body)
        console.log(data)
    }
})