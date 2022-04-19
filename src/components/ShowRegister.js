import React, { useState } from "react";
import { useSelector } from "react-redux";
const ShowRegister = () => {
  const [mostrar, setMostrar] = useState(false);
  const register = useSelector((state) => state.registros.register);
  return (
    <>
      <button onClick={() => setMostrar(!mostrar)}>
        Mostrar Registros {mostrar ? "on" : "of"}
      </button>
      {mostrar && (
        <ul>
          {register.map((registro, key) => (
            <li key={key}>
              <b>Nombre:{registro.name === "" ? "None" : registro.name} </b>
              <br />
              <b>Pais:{registro.country === "" ? "None" : registro.country}</b>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ShowRegister;
