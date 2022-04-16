import React,{useContext} from 'react';
import NotesContext from "../context/notes-context"

const Note = ({note}) => {
  return (
    <tr style={{ width: "40%" }} key={note.title}>
      <td>{note.title}</td>
      <td>{note.body}</td>
      <td style={{ width: "3%" }}>
        <button
          className="btn btn-sm btn-danger"
        ></button>
        <i className="far fa-times"></i>
      </td>
    </tr>
  );
};

export default Note