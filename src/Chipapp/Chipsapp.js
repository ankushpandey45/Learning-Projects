import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

const ChipsApp = () => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const Value = e?.target?.value;
    if (/^[A-Za-z\s]+$/.test(Value)) {
      setInputValue(Value);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e?.key === "Enter") {
      if (inputValue === "") {
        alert("Please enter some text before pressing Enter.");
        return;
      }
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
      e.target.blur();
    } else if (e?.key === " ") {
      e?.preventDefault();
    }
  };

  const handleDeleteChip = (chipToDelete) => () => {
    setChips(chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <TextField
        style={{ width: "300px" }}
        label="Enter your text and click Enter key"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleInputKeyDown}
      ></TextField>
      <div style={{ marginTop: "20px" }}>
        {chips.map((chip, index) => (
          <Chip
            key={index}
            label={chip}
            onDelete={handleDeleteChip(chip)}
            style={{ marginRight: "5px", marginBottom: "5px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChipsApp;
