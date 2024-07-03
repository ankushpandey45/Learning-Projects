import React, { useState } from "react";

const Toggle = () => {
  const [text, settext] = useState(true);
  const hideText = () => {
    settext(!text);
  };
  return (
    <div>
      {text && <h2>Show and Hide your text.</h2>}
      <button onClick={hideText}>Show/Hide Text</button>
    </div>
  );
};

export default Toggle;
