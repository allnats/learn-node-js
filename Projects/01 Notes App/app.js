// Relative path always start with a 'dot slash'.
const my_utils = require("./utils")
const getNotes = require("./notes")
const validator = require("validator")
const chalk = require("chalk")

/* ES Module alternative

import "./utils"

*/

const my_name = "Allendale"

console.log(my_utils.name)
console.log(my_utils.add(2, 3))
console.log(getNotes())

let some_email = "allendale@nato.com"
let some_address = "example.com"

const msg_ok = chalk.green.inverse
const msg_fail = chalk.red.inverse


console.log(
    `Is ${some_email} a valid email address?`,
    msg_ok(validator.isEmail(some_email))
)

console.log(
    `Is ${some_address} a valid email address?`,
    msg_fail(validator.isEmail(some_address))
)

console.log(
    `Is ${some_address} a valid URL?`,
    msg_ok(validator.isURL(some_address))
)