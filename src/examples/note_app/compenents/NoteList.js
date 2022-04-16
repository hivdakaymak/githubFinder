import React from "react"
import Note from "./Note"
import NotesContext from "../context/notes-context"
import notesContext from "../context/notes-context"

 
const NoteList = () =>{
    return (
        notes.map((note) => (
            <Note key={note.title} note={note}/>
        ))
    )
} 



export default NoteList