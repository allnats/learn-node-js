import fs from "node:fs"


fs.writeFileSync("notes.txt", "This file was created by Node.js\n")
fs.appendFileSync("notes.txt", "My name is Allen!")