import React, { useEffect, useState } from "react";
import Userdata from "./Userdata";

const TableofData = () => {
  const [User, setUser] = useState([]);
  const Api = "https://dummyjson.com/products";

  const fetchApi = async (url) => {
    fetch(url)
    .then((e) => e.json())
    
    .then((data) => setUser(data.products));
     
  };
  useEffect(() => {
    fetchApi(Api);
  }, []);

  return (
    <>
      <div> 
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <Userdata user={User} />
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TableofData;
