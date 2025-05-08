const yargs = require("yargs")
console.log("Below is the list of passed arguments:")

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

console.log(yargs.argv)