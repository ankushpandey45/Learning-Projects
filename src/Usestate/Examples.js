import React from "react";
import Toggle from "./Toggle";
import Charcount from "./Charcount";
import Colorchange from "./Colorchange";
import SearchInput from "./SearchInput";
import DragandDrop from "./DragandDrop";

const Examples = () => {
  return (
    <>
      <div>
        <Toggle />
        <br />
        <Charcount />
        <br />
        <Colorchange />
        <SearchInput />
        <br />
        <DragandDrop />
      </div>
    </>
  );
};

export default Examples;
