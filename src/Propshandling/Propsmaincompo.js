// import { createContext  } from "react";
// export const usercontext = createContext();
import { useCallback, useState, useMemo } from "react";
import Buttoncompo from "./Buttoncompo";
import Headercompo from "./Headercompo";
const Propsmaincompo = () => {
  const [counter, setcounter] = useState(0);
  // const [counter1, setcounter1] = useState(0);
  const [inc, setinc] = useState("INC");
  const [dec, setdec] = useState("DEC");

  const increment = useCallback(() => {
    console.log("inc", counter);
    setcounter(counter + 1);
  }, []);
  const decerement = useCallback(() => {
    console.log("dec", counter);
    setcounter(counter - 1);
  }, []);
  // useMemo(() => {
  //   setcounter(counter);
  // }, [counter]);
  // useMemo(() => {
  //   if (counter > 5) {
  //     setcounter1(counter1 + 1);
  //   }
  // }, []);

  return (
    <>
      <div>
        {/* <h1>{counter1}</h1> */}
        <Headercompo counter={counter} />
        {/* {func()} */}
        {/* {increment()} */}
        <Buttoncompo increment={increment} inc={inc} />
        <Buttoncompo increment={decerement} inc={dec} />
        {/* <usercontext.Provider value={{ increment, decerement }}>
          {props}
         
          
          <Headercompo />
        </usercontext.Provider> */}
      </div>
    </>
  );
};

export default Propsmaincompo;
