const fs = require("fs")

const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday"
}

// JSON to a string.
const book_json = JSON.stringify(book)
console.log(book_json)
// Write it to a file.
fs.writeFileSync("1-json.json", book_json)

// String to a JSON (dictionary)
let parsed_json = JSON.parse(book_json)
console.log(parsed_json)

// Reading from a file and parsing it.
try {
    const data_buffer = fs.readFileSync("1-json.json") // This returns a buffer.
    const read_data = data_buffer.toString()
    parsed_json = JSON.parse(book_json)
    console.log(parsed_json.author)
} catch (e) {
    console.log(e.message)
}
// You can convert buffer to string using this method.
