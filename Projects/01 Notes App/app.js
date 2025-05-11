// Relative path always start with a 'dot slash'.
const yargs = require("yargs")
const validator = require("validator")
const chalk = require("chalk")
const my_utils = require("./utils")
const notes = require("./notes").default


// Set the version of your program.
// You can display this with the --version flag.
yargs.version("1.1.0")

// Create add command
yargs.command({
    command: "add",
    describe: "Adds a new note!",
    builder: {
        title: {
            describe: "Note's title",
            demandOption: true, // Set to required
            type: "string"
        },
        body: {
            describe: "Note's contents",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove comand.
yargs.command({
    command: "remove",
    describe: "Removes a note!",
    builder: {
        title: {
            describe: "Note's title",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

// Create list comand.
yargs.command({
    command: "list",
    describe: "List your notes!",
    handler: function () {
        notes.getNotes()
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

yargs.parse()
// console.log(yargs.argv)