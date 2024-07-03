import React, { useState } from "react";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";

const Table = () => {
  const [inputValue, setInputValue] = useState("");
  const [tables, setTables] = useState([]);
  const printTable = (num) => {
    if (tables.some((table) => table[0] === num)) {
      alert("Table for this number is already printed !");
      return;
    }
    if (tables.length >= 6) {
      alert("You can only print up to 6 tables(:");
      return;
    }
    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(num * i);
    }
    setTables([...tables, table]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const inputNum = parseInt(inputValue);
      if (!isNaN(inputNum)) {
        printTable(inputNum);
        setInputValue("");
      } else {
        alert("Please enter a valid number!");
      }
    } else if (event?.key === "Backspace") {
      setInputValue("");
    }
  };
  const Deleteicon = (index) => {
    const updatedTables = tables.filter((_, i) => i !== index);
    setTables(updatedTables);
  };

  return (
    <>
      <div className="header">
        <h2 style={{ flexWrap: "wrap", wordWrap: "break-word" }}>
          Enter Your Number Below To Get Table Of Your Number.
        </h2>
      </div>

      <div className="container2">
        <input
          type="number"
          placeholder="Enter Your Number"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyPress}
        />

        <h3>Table:{inputValue}</h3>

        <div
          className="maindiv "
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            wordWrap: "break-word",
          }}
        >
          {tables.map((table, index) => (
            <div key={index} className="scnd-div">
              <ul>
                <div
                  className="maintable"
                  style={{
                    backgroundColor: "black",
                    marginTop: " 12px",
                    padding: " 4px 10px 10px 10px",
                    borderRadius: "10px",
                  }}
                >
                  <CancelSharpIcon
                    onClick={() => Deleteicon(index)}
                    className={"dlt"}
                    style={{
                      cursor: "pointer",
                      borderRadius: "30px",
                      color: "grey",
                      marginLeft: "90%",
                    }}
                  />

                  <div
                    className="li-div"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "white",
                      marginTop: "5px",
                      padding: " 4px",
                      borderRadius: "8px",
                    }}
                  >
                    {table.map((item, i) => (
                      <li key={index}>
                        <div
                          className="s1"
                          style={{ width: "32px", color: "black" }}
                        >
                          {item / (i + 1)}
                        </div>
                        <div
                          className="s2"
                          style={{ width: "32px", color: "black" }}
                        >
                          x
                        </div>
                        <div
                          className="s3"
                          style={{ width: "32px", color: "black" }}
                        >
                          {i + 1}
                        </div>
                        <div
                          className="s4"
                          style={{ width: "32px", color: "black" }}
                        >
                          =
                        </div>
                        <div
                          className="s5"
                          style={{ width: "32px", color: "black" }}
                        >
                          {item}
                        </div>
                      </li>
                    ))}
                  </div>
                </div>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;
