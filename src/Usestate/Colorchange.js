import React, { useState } from "react";

const Colorchange = () => {
  const [color, setcolor] = useState("");
  const changeColor = (e) => {
    setcolor(e.target.value);
  };
  return (
    <div>
      <select onChange={changeColor}>
        <option value={""}>select color</option>
        <option value="red">red color</option>
        <option value="green">green color</option>
        <option value="yellow">yellow color</option>
        <option value="blue">blue color</option>
      </select>

      <div
        style={{
          backgroundColor: color,
          width: "100px",
          height: "50px",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
};

export default Colorchange;
