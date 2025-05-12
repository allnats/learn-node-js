
import { readFileSync, writeFileSync } from "fs"
import chalk from "chalk-new"

const getNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgGreen("Fetching your notes..."))

    // Pretty the notes' title and contents.
    for (let idx in notes) {
        console.log("=".repeat(40))
        console.log(chalk.bgBlue(`Note #${Number(idx) + 1}`))
        console.log(`${chalk.blue("Title")}: ${notes[idx].title}`)
        console.log(`${chalk.blue("Content")} ${notes[idx].body}`)
        console.log("=".repeat(40))
    }
}


const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote) {
        console.log(chalk.bgRed("ERROR: "), "Note title taken")
        return
    }
    
    notes.push({
        title: title,
        body: body
    })

    console.log(chalk.bgGreen("SUCCESS: "), "Note added!")

    saveNotes(notes)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes, null, 2)
    writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {
    try {

        const dataBuffer = readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {

        return []

    }
}

const removeNote = title => {
    const notes = loadNotes()

    if (notes.length === 0) {
        console.log(chalk.bgYellow("WARNING: "), "Notes are empty! Nothing to remove.")
    }

    const new_notes = notes.filter((note, idx) => {
        if (note.title !== title) {
            return true
        } else {
            console.log(chalk.bgGreen("SUCCESS: "), `Removed ${note.title} at index ${idx}`)
            return false
        }
    })

    if (notes.length === new_notes.length) {
        console.log(chalk.bgRed("ERROR: "), `Title "${title}" does not exist.`)
    } else {
        saveNotes(new_notes)
    }


}

const readNote = title => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)

    if (!note) {
        console.log(chalk.bgRed("ERROR: "), `${title} not found.`)
        return
    }

    console.log(chalk.bgBlue(`Title: ${note.title}`))
    console.log(`Content: ${note.body}`)
}

export default {
    getNotes,
    addNote,
    removeNote,
    readNote
}