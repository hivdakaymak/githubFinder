import React, { useState, useEffect, useReducer } from "react";
import notesReducer from '../reducer/notes';
import Form from "./Form";
import Note from './Note';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
    //   const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer, [])
      const [title, setTitle] = useState('');
      const [body, setBody] = useState('');
    
      useEffect(() =>{
          const notesData = JSON.parse(localStorage.getItem('notes'))
          if(notesData){
              dispatch({type:'POPULATE_NOTES', notes: notesData})
    
        }
    
      },[])
    v 
      useEffect(() => {
          localStorage.setItem('notes', JSON.stringify(notes))
    
      },[notes])
    
    
 
      return (
        <NotesContext.Provider value={{notes,dispatch}}>
        <div className="container p-5">
          <div className="card mb-3">
            <div className="card-header">Notes</div>
            {
                notes &&(
                    <table className="table table-sm table-striped mb-0">
                        <tbody>
                            {
                               <NoteList />
                            }
                        </tbody> 
                    </table>
                )
            }
          </div>
          <div className="card mb-3">
            <div className="card-header">Add a New Note</div>
            <div className="card-body">
              <Form/> 
            </div>
          </div>
        </div>

        </NotesContext.Provider>
      );
    };
    

export default NoteApp










