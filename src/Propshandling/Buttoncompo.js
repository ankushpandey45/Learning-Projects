// import React, { useContext } from "react";
// import { usercontext } from "./Propsmaincompo";
//   const { increment, decerement } = useContext(usercontext);
const Buttoncompo = ({ increment, inc, decrement, dec }) => {
  return (
    <div>
      <button onClick={decrement}>{dec}</button>
      <button onClick={increment}>{inc}</button>
    </div>
  );
};

export default Buttoncompo;
