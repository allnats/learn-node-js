const chalk = require("chalk")
const getNotes = require("./notes.js")
const yargs = require("yargs")

const command = process.argv[2]

// If command is empty, exit the program.
if (command === undefined) {
    process.exit()
}

if (command.toLowerCase() === "add") {
    console.log("Note added!")
} else if (command.toLowerCase() === "remove") {
    console.log("Removing note!")
}