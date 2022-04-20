import React from "react";
import ShowPersonajes from "../components/ShowPersonajes";
import Form from "../components/Form";
import ShowRegister from "../components/ShowRegister";
import FilterSelecter from "../components/FilterSelecter";
import { question, options } from "../api/questions/questions"; //simulacion de api

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <FilterSelecter question={question} options={options} />
        <Form />
        <ShowRegister />
        <ShowPersonajes />
      </div>
    </div>
  );
};

export default Home;
