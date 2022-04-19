import React from "react";
import { useSelector } from "react-redux";
const FilterSelecter = ({ question = "", options = [] }) => {
  const info = useSelector((state) => state);
  console.log(info);
  return (
    <>
      <h4>{question}</h4>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {options.map((opt, i) => (
          <label key={i}>
            <input
              type="radio"
              name={`question@${question}`}
              value={opt.value}
            />
            {opt.opt}
          </label>
        ))}
      </div>
    </>
  );
};

export default FilterSelecter;
