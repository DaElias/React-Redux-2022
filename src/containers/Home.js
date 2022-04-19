import React from "react";
import ShowPersonajes from "../components/ShowPersonajes";
import Form from "../components/Form";
import ShowRegister from "../components/ShowRegister";
import FilterSelecter from "../components/FilterSelecter";



const question = "¿Cuanto !es 1 + 1 ?";
const options = [
  {
    value: "a",
    opt: "a. Todas la anteriores.",
  },
  {
    value: "b",
    opt: "b. Existen diferentes soluciones.",
  },
  {
    value: "c",
    opt: "c. No existe dentro del campo de los Reales.",
  },
];

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <FilterSelecter question={question} options={options} />
      <Form />
      <ShowRegister />
      <ShowPersonajes />
    </div>
  );
};

export default Home;
