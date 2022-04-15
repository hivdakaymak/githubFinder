import React from 'react';
const Note = ({note,removeNote}) => {
  return (
    <tr style={{ width: "40%" }} key={note.title}>
      <td>{note.title}</td>
      <td>{note.body}</td>
      <td style={{ width: "3%" }}>
        <button
          onClick={() => removeNote(note.title)}
          className="btn btn-sm btn-danger"
        ></button>
        <i className="far fa-times"></i>
      </td>
    </tr>
  );
};

export default Note