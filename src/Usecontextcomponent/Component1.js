import React, { createContext, useState } from "react";
import Component2 from "./Component2";

export const UserContext = createContext();

const Component1 = ({ children }) => {
  const [counter, setcounter] = useState(0);

  const increment = () => {
    setcounter((prevcounter) => prevcounter + 1);
  };

  const decerement = () => {
    setcounter((prevcounter) =>
      prevcounter > 0 ? prevcounter - 1 : prevcounter
    );
  };

  return (
    <>
      <UserContext.Provider value={{ counter, increment, decerement }}>
        {children}
        <Component2 />
        
      </UserContext.Provider>
    </>
  );
};

export default Component1;
