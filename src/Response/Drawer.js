import React, { useState } from "react";

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="wiki_btn_div">
        <button onClick={toggleDrawer} className="wiki_btn">
          {isOpen ? "Close" : "Open "}
        </button>
      </div>
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <button className="wiki_btn">About</button>
      </div>
    </div>
  );
}

export default Drawer;
