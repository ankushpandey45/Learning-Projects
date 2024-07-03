import React, { useContext } from "react";
import { mycontext } from "./Child1";

const Child2 = () => {
  const { textcolor, changeday } = useContext(mycontext);
  const day = "Sunday";
  return (
    <div>
      <h1 style={{ color: textcolor }}>Hello! how are you?</h1>
      <button onClick={() => changeday(day)}>Change day</button>
    </div>
  );
};

export default Child2;
