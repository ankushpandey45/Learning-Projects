import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const Progressbar = () => {
  const [progress, setProgress] = useState(0);

  const handleChange = (_, val) => {
    setProgress(val);
  };

  return (
    <>
      <div className="container" style={{ width: "100", padding: "20px" }}>
        <h3>Data progress:- {progress}%</h3>
        <Slider
          defaultValue={progress}
          onChange={handleChange}
          min={0}
          max={100}
          style={{ width: "40%" }}
        />
      </div>
    </>
  );
};

export default Progressbar;
