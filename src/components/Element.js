import React, { useState } from "react";

const Element = ({ elemt, handleDelete, handleSaveChanges, num }) => {
  const [editar, setEditar] = useState(false);
  const [inputEdit, setInputEdit] = useState({
    name: elemt.name,
    air_date: elemt.air_date,
  });

  const handleinput = (e) => {
    switch (e.target.name) {
      case "name":
        setInputEdit({ ...inputEdit, name: e.target.value });
        break;
      case "date":
        setInputEdit({ ...inputEdit, air_date: e.target.value });
        break;
      default:
        break;
    }
  };
  return (
    <div style={{ backgroundColor: "green", color: "white" }}>
      <b>{num + 1}-</b>
      {!editar ? (
        <>
          {JSON.stringify({ name: elemt.name, fecha: elemt.air_date })}
          <br />
        </>
      ) : (
        <div>
          name:
          <input name="name" value={inputEdit.name} onChange={handleinput} />
          fecha:
          <input
            name="date"
            value={inputEdit.air_date}
            onChange={handleinput}
          />
        </div>
      )}
      {!editar && (
        <button onClick={() => handleDelete(elemt.id)}>Eliminar</button>
      )}
      <button onClick={() => setEditar(!editar)}>
        {!editar ? "Editar " : "Canceral Edicion"}
      </button>
      {editar && (
        <button
          onClick={() => {
            handleSaveChanges({
              id: elemt.id,
              data: { name: inputEdit.name, air_date: inputEdit.air_date },
            });
            setEditar(!editar);
          }}
          style={{ marginLeft: "40px" }}
        >
          Guardar
        </button>
      )}
    </div>
  );
};

export default Element;
