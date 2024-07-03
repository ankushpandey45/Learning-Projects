import React, { useState, useMemo } from "react";

const nums = new Array(500).fill(0).map((_, i) => {
  return {
    index: i,
    ismagical: i === 99,
  };
});
const UssememoCompo = () => {
  const [count, setcount] = useState(0);
  const [Number, setNumber] = useState(nums);

  const magical = useMemo(
    () => Number.find((item) => item.ismagical === true),
    [Number]
  );

  return (
    <>
      <div>
        <button
          onClick={() => {
            setcount(count + 1);
            if (count === 10) {
              setNumber(
                new Array(100).fill(0).map((_, i) => {
                  return {
                    index: i,
                    ismagical: i === 20,
                  };
                })
              );
            }
          }}
        >
          Count is {count}
        </button>
        <br />
        <br />
        <span>{magical.index}</span>
      </div>
    </>
  );
};

export default UssememoCompo;
