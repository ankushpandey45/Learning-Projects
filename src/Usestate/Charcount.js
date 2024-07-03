import React, { useState } from "react";

const Charcount = () => {
  const [char, setchar] = useState("");
  const countChar = (e) => {
    setchar(e.target.value);
  };
  return (
    <div>
      <input onChange={countChar} value={char} />
      <h2> count your char={char.length}</h2>
    </div>
  );
};

export default Charcount;
