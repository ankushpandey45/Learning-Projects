import React, { useState, useEffect } from "react";
import "./Main.css";
//import TableofData from "./TableofData";

  const Maincompo = () => {
  const [posts, setPosts] = useState([]);
  const cardsApi = "https://dummyjson.com/products";
  const fetchApi = async (url) => {
    const Data = await fetch(url);
    const result = await Data.json();
    setPosts(result.products);

    // .then((e) => e.json())
    // .then((data) => setPosts(data.products));
  };
  useEffect(() => {
    fetchApi(cardsApi);
  }, []);

  return (
    <>
      {/* <TableofData/> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",

          padding: "70px",
          justifyContent: "spaceAround",
          gap: "100px",
          marginLeft: "50px",
        }}
      >
        {posts?.map((post, ind) => (
          <div className="cards">
            <img src={post.thumbnail} alt="ankush" key={ind} />
            <h4>Catagery:-{post.category}</h4>
            <h4> {post.title}</h4>
            <h4>{post.brand}</h4>
            <h2>Rs-{post.price}</h2>
            <div className="card button">
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Maincompo;