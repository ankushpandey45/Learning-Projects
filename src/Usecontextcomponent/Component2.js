import React, { useContext } from "react";
import { UserContext } from "./Component1";

const Component2 = () => {
  const { counter, increment, decerement } = useContext(UserContext);
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <button onClick={decerement}>Decerement</button>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
};

export default Component2;
