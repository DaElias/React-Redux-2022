import React, { useEffect, useRef } from "react";
import Element from "./Element";

import { connect } from "react-redux";
import {
  setPersonajes,
  deletePersonaje,
  setPerson,
  editPerson,
} from "../actions/type";

// * importates para la ejecucion de Redux
const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  setPersonajes: (value) => dispatch(setPersonajes(value)),
  setPerson: (value) => dispatch(setPerson(value)),
  deletePersonaje: (value) => dispatch(deletePersonaje(value)),
  editPerson: (value) => dispatch(editPerson(value)),
});

const ShowPersonajes = ({
  list = [],
  setPersonajes,
  deletePersonaje,
  setPerson,
  editPerson,
}) => {
  const inputName = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((res) => {
          setPersonajes(res.results);
    })
    .catch((e) => console.log(e));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleDelete = (id) => deletePersonaje(id);

  const handleEdit = (id) => {};

  const handleSaveChanges = (payload) => editPerson(payload);

  const handleCreatePerson = () => {
    const fecha = new Date();
    const newPerson = {
      name: inputName.current.value,
      air_date: fecha,
      id: fecha,
    };
    setPerson(newPerson);
    inputName.current.value = "";
  };

  return (
    <div>
      <h1>Personajes</h1>
      <ul>
        {list.map((elemt, key) => {
          return (
            <li key={key} style={{ margin: "5px" }}>
              <Element
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                elemt={elemt}
                key={key}
                handleSaveChanges={handleSaveChanges}
              />
            </li>
          );
        })}
      </ul>
      <h1>Crear usuaro</h1>
      <div style={{ marginBottom: "200px" }}>
        <label>
          <h3>Name</h3>
          <input ref={inputName} type="text" />
        </label>
        <button onClick={handleCreatePerson}>Create person</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPersonajes);
