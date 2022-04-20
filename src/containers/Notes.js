import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNoteId } from "../actions/type";

const Notes = () => {
  const dispatch = useDispatch();
  const notas = useSelector((state) => state.notes.notes);
  const handleEditNote = (id) => dispatch(editNoteId(id));

  const handleSubmit = async (e) => {
    //   //TODO crear nueva y agregar al back-end y front-end
    e.preventDefault();
    const content = e.target.content.value;
    if (content !== "") {
      // * Old method
      //   const newNote = await createNewNote(content); // add to backEnd
      //   dispatch(addNote(newNote)); // add to frontEnd
      // * New emthod
      dispatch(addNote(content)); // use Thunk
    }
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
          <input name="content" required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Notes;
