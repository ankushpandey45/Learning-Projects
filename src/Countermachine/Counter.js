import React, { useState, useRef, useEffect } from "react";
//import CounterApp from "./Cartcounter";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [incbuttonsDisabled, setincButtonsDisabled] = useState(false);
  const [stpbtndisabled, setstpbtndisabled] = useState(false);
  const [decbuttondisabled, setdecbuttondisabled] = useState(false);
  const [clr, setclr] = useState();
  const intervalRef = useRef(null);

  const decrBtn = () => {
    intervalRef.current = setInterval(() => {
      setCounter((counting) => (counting > 0 ? counting - 1 : counting));
      setstpbtndisabled(false);
      setincButtonsDisabled(true);
      setdecbuttondisabled(true);
      setclr({ color: "Tomato" });
    }, 1000);
  };
  const decrbtnoneclick = () => {
    setCounter((counting) => (counting > 0 ? counting - 1 : counting));
    setclr({ color: "Tomato" });
  };

  const incrBtn = () => {
    intervalRef.current = setInterval(() => {
      setCounter((counting) => counting + 1);
      setincButtonsDisabled(true);
      setdecbuttondisabled(true);
      setstpbtndisabled(false);
      setclr({ color: "DodgerBlue" });
    }, 1000);
  };
  const incrbtnoneclick = () => {
    setCounter((counting) => counting + 1);
    setclr({ color: "DodgerBlue" });
  };

  const stpBtn = () => {
    clearInterval(intervalRef.current);
    setstpbtndisabled(true);
    setincButtonsDisabled(false);
    setdecbuttondisabled(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setclr();
    }, 500);
    return () => clearTimeout(timeout);
  }, [counter]);

  return (
    <>
      {/* <div><CounterApp/></div> */}
      <div className="container">
        <div className="h1">
          <h1 style={clr}>{counter}</h1>
        </div>
        <div className="btn">
          <button
            type="button"
            onClick={decrbtnoneclick}
            onDoubleClick={decrBtn}
            className="btn btn-danger m-3"
            disabled={decbuttondisabled}
          >
            DECREMENT
          </button>
          <button
            type="button"
            onClick={stpBtn}
            className="btn btn-warning m-3"
            disabled={stpbtndisabled}
          >
            STOP
          </button>
          <button
            type="button"
            onClick={incrbtnoneclick}
            onDoubleClick={incrBtn}
            className="btn btn-primary m-3"
            disabled={incbuttonsDisabled}
          >
            INCREMENT
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
