const chalk = require("chalk")
const getNotes = require("./notes.js")

const msg = getNotes()
console.log(`The message is: ${msg}`)

const greenMsg = chalk.green.inverse(msg)
console.log(greenMsg)