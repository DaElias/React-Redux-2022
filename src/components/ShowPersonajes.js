import React, { useEffect, useRef } from "react";
import Element from "./Element";

import { useSelector, useDispatch } from "react-redux";
import {
  setPersonajes,
  deletePersonaje,
  setPerson,
  editPerson,
  emptyList,
} from "../actions/type";

const ShowPersonajes = () => {
  const inputName = useRef(null);
  const list = useSelector((state) => state.personajes.list);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/episode")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setPersonajes(res.results);
  //     })
  //     .catch((e) => {
  //       console.log("Error: ", e);
  //       setPersonajes([]);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const handleDelete = (id) => dispatch(deletePersonaje(id));

  const handleSaveChanges = (payload) => dispatch(editPerson(payload));
  const vaciarState = () => dispatch(emptyList());
  // const vaciarState = () => dispatch(setPersonajes([]));

  const handleCreatePerson = () => {
    // if (inputName.current.value !== "") {
    const fecha = new Date();
    const newPerson = {
      name: inputName.current.value,
      air_date: fecha,
      id: fecha,
    };
    dispatch(setPerson(newPerson));
    inputName.current.value = "";
    // }
  };

  return (
    <div>
      <h3>Personajes</h3>
      <ul
        style={{
          height: "300px",
          backgroundColor: "gray",
          padding: "2px",
          overflowY: "scroll",
        }}
      >
        {list.map((elemt, key) => {
          return (
            <li key={key} style={{ margin: "5px" }}>
              <Element
                handleDelete={handleDelete}
                elemt={elemt}
                key={key}
                num={key}
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
          <button onClick={vaciarState}>Vaciar lista</button>
        </label>
        <button onClick={handleCreatePerson}>Create person</button>
      </div>
    </div>
  );
};

export default ShowPersonajes;
