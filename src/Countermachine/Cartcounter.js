import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    setCart([...cart, count]);
    setCount(0);
  };

  return (
    <>
      <div className="container">
        <h1 style={{ color: "white" }}>Shopping Cart</h1>
        <div>
          <button
            style={{ backgroundColor: "tomato", width: "70px", color: "white" }}
            onClick={decrement}
          >
            -
          </button>
          <h2 style={{ color: "white" }}>{count}</h2>
          <button
            style={{ backgroundColor: "tomato", width: "70px", color: "white" }}
            onClick={increment}
          >
            +
          </button>
        </div>
        <button
          style={{ backgroundColor: "tomato", width: "100px", color: "white" }}
          onClick={addToCart}
        >
          Add to Cart
        </button>
        <br />
        <br />

        <ul>
          {cart.map((item, index) => (
            <li style={{ color: "black" }} key={index}>
              Item: {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CounterApp;
