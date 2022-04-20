import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNoteId } from "../actions/type";
import { createNewNote } from "../services/notes";

const Notes = () => {
  const dispatch = useDispatch();
  const notas = useSelector((state) => state.notes.notes);
  const handleEditNote = (id) => dispatch(editNoteId(id));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    //TODO crear nueva y agregar al back-end y front-end
    const newNote = await createNewNote(content);
    dispatch(addNote(newNote));

    e.target.content.value = "";
  };
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notas.map((nota) => (
          <li key={nota.id}>
            {nota.mensaje}{" "}
            <b
              style={{ cursor: "pointer" }}
              onClick={() => handleEditNote(nota.id)}
            >
              {!nota.state ? "Inactivo" : "Activo"}
            </b>
          </li>
        ))}
      </ul>
      <h2>Create Mote</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Contenido:
          <input name="content" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Notes;
