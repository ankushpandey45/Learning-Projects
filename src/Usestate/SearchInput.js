import React, { useState } from "react";

const SearchInput = () => {
  const [search, setsearch] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Carrot",
    "Date",
    "Elephant",
    "Fig",
    "Grape",
  ];
  const inputArea = (e) => {
    setsearch(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div>
        <input type="text" value={search} onChange={inputArea} />
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchInput;
