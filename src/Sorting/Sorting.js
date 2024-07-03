import React, { useState } from "react";

const Sorting = () => {
  const [firstList, setfirstList] = useState([]);
  const [secondList, setsecondList] = useState([]);
  const [sortList, setsortList] = useState([]);

  const AccendingOrder = (e) => {
    const sortnumber = [...firstList, ...secondList].sort((a, b) => a - b);
    setsortList(sortnumber);
  };

  const DecendingOrder = () => {
    const sortnumber = [...secondList, ...firstList].sort((a, b) => b - a);
    setsortList(sortnumber);
  };

  return (
    <>
      <div
        style={{ textAlign: "center", alignItems: "center", padding: "60px" }}
      >
        <div>
          <input
            onChange={(e) => setfirstList(e.target.value)}
            value={firstList}
            type="number"
            style={{
              width: "250px",
              borderRadius: "5px",
              margin: "5px",
              height: "40px",
              border: " 2px solid lightgrey",
            }}
          />
          <input
            onChange={(e) => setsecondList(e.target.value)}
            value={secondList}
            type="number"
            style={{
              width: "250px",
              borderRadius: "5px",
              height: "40px",
              border: " 2px solid lightgrey",
            }}
          />
        </div>

        <div style={{ alignItems: "center", padding: "15px" }}>
          <button
            onClick={AccendingOrder}
            style={{
              backgroundColor: "#008CBA",
              margin: "10px",
              borderRadius: "5px",
              color: "white",
              height: "40px",
              border: "2px solid white",
            }}
          >
            AccendingOrder
          </button>

          <button
            onClick={DecendingOrder}
            style={{
              backgroundColor: "#008CBA",
              margin: "10px",
              borderRadius: "5px",
              color: "white",
              height: "40px",
              border: "2px solid white",
            }}
          >
            DecendingOrder
          </button>
        </div>

        {sortList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </>
  );
};

export default Sorting;
