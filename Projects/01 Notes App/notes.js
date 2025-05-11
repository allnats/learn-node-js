
import { readFileSync, writeFileSync } from "fs"

const getNotes = () => "Your notes..."


const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length > 0) {
        console.log("Note title taken")
        return
    }

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
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
        console.log("Notes are empty! Nothing to remove.")
    }

    

}

export default {
    getNotes,
    addNote,
    removeNote
}