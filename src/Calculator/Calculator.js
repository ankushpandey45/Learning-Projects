import React, { useState } from "react";
import "./Calc.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const displayNumber = (e) => {
    const value = e.target.value;

    if (value === "=") {
      setDisplay(eval(display).toString());
    } else if (value === "C") {
      setDisplay(" ");
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="scnd_div">
          {/* <div className="display_div"> */}
          <input
            style={{
              backgroundColor: "black",
              color: "white",
              width: " 255px",
              height: "40px",
              padding: "9px",
              borderRadius: "10px",
              marginLeft: "10px",
              border: "solid white",
              fontWeight: "600",
              fontSize: "20px",
            }}
            value={display}
            readOnly
            type="text"
          />
          {/* </div> */}
          <div className="btn_div">
            <button onClick={displayNumber} value="1">
              1
            </button>
            <button onClick={displayNumber} value="2">
              2
            </button>
            <button onClick={displayNumber} value="3">
              3
            </button>
            <button onClick={displayNumber} value="4">
              4
            </button>
            <button onClick={displayNumber} value="5">
              5
            </button>
            <button onClick={displayNumber} value="6">
              6
            </button>
            <button onClick={displayNumber} value="7">
              7
            </button>
            <button onClick={displayNumber} value="8">
              8
            </button>
            <button onClick={displayNumber} value="9">
              9
            </button>
            <button onClick={displayNumber} value="0">
              0
            </button>
            <button onClick={displayNumber} value=".">
              .
            </button>
            <button onClick={displayNumber} value="+">
              +
            </button>
            <button onClick={displayNumber} value="-">
              -
            </button>
            <button onClick={displayNumber} value="/">
              /
            </button>
            <button
              style={{ backgroundColor: "green" }}
              onClick={displayNumber}
              value="="
            >
              =
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => setDisplay(" ")}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
