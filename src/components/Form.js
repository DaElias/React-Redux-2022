import React from "react";
import { useDispatch } from "react-redux";
import { addRegisterData } from "../actions/type";
const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addRegisterData({
        name: e.target.name.value,
        country: e.target.country.value,
        date: new Date().getTime(),
      })
    );
    e.target.name.value = "";
    e.target.country.value = "";
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h3>Diligencia formulario</h3>
      <label>
        <b>Nombre:</b>
        <input name="name" type="text"></input>
      </label>
      <label>
        <b>Pais:</b>
        <input name="country" type="text"></input>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
