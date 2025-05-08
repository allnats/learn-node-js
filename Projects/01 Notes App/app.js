// Relative path always start with a 'dot slash'.
const yargs = require("yargs")
const validator = require("validator")
const chalk = require("chalk")
const my_utils = require("./utils")
const getNotes = require("./notes")


// Set the version of your program.
// You can display this with the --version flag.
yargs.version("1.1.0")

// Create add command
yargs.command({
    command: "add",
    describe: "Adds a new note!",
    handler: () => {
        console.log("Adding a new note!")
    }
})

// Create remove comand.
yargs.command({
    command: "remove",
    describe: "Removes a note!",
    handler: function () {
        console.log("Removing note!")
    }
})

// Create list comand.
yargs.command({
    command: "list",
    describe: "List your notes!",
    handler: function () {
        console.log("Listing notes!")
    }
})

// Create read comand.
yargs.command({
    command: "read",
    describe: "Read a note!",
    handler: function () {
        console.log("Reading note!")
    }
})

console.log(yargs.argv)