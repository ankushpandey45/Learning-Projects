import React, { createContext, useState } from "react";
import Child2 from "./Child2";
export const mycontext = createContext();
const Child1 = ({ children }) => {
  const color = "orange";
  const [day, setday] = useState("Monday");
  const getday = (item) => {
    setday(item);
  };

  return (
    <div>
      <mycontext.Provider value={{ textcolor: color, changeday: getday }}>
        {children}
        <h1>Today is {day}</h1>
        <Child2 />
      </mycontext.Provider>
    </div>
  );
};

export default Child1;
