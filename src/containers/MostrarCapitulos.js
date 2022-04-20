import React, { useEffect, useState } from "react";
import { getPersonajes } from "../api/StarWarsPersonajes";
import { useDispatch, useSelector } from "react-redux";
import { addTodoPersonajes } from "../actions/type";
const MostrarCapitulos = () => {
  const dispatch = useDispatch();
  const [Pagination, setPagination] = useState({
    next: "",
    previous: "",
    count: "",
  });
  const personajesSW = useSelector(({ starWars }) => starWars.personajes);
  useEffect(() => {
    getPersonajes("https://swapi.dev/api/people/").then((res) => {
      dispatch(addTodoPersonajes(res.list));
      setPagination({
        next: res.next,
        previous: res.previous,
        count: res.count,
      });
    });
  }, []);

  const handlePagination = (e) => {
    const type = e.target.name;
    switch (type) {
      case "Next":
        getPersonajes(Pagination.next)
          .then((res) => {
            dispatch(addTodoPersonajes(res.list));
              setPagination({
                next: res.next,
                previous: res.previous,
                count: res.count,
              });
          })
          .catch((e) => console.log(e));
        break;
      case "previous":
        getPersonajes(Pagination.previous)
          .then((res) => {
            dispatch(addTodoPersonajes(res.list));
              setPagination({
                next: res.next,
                previous: res.previous,
                count: res.count,
              });
          })
          .catch((e) => console.log(e));
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h1>Personajes de Star Wars</h1>
      <ul>
        {personajesSW[0]
          ? personajesSW.map((person, i) => <li key={i}>{person.name}</li>)
          : "Cargando ..."}
      </ul>

      <button name="previous" onClick={handlePagination}>
        previous
      </button>
      <button name="Next" onClick={handlePagination}>
        Next
      </button>
    </div>
  );
};

export default MostrarCapitulos;
