import React from "react";
import { useState, useEffect } from "react";
import Drawer from "./Drawer";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Marvel = () => {
  const [mydata, setMydata] = useState([]);

  const myApi =
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9430e42fb2ad0970abba71eca8a0260d&hash=7f6119a645d8843ce2d96ebaaf43ae76";

  const fetchApi = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    setMydata(result?.data?.results);
    console.log(result?.data?.results);
  };

  useEffect(() => {
    fetchApi(myApi);
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "200px",
          }}
        >
          <div>
            <h1 style={{ color: "rgb(131, 6, 6, 0.9)", fontWeight: "800" }}>
              Marvel
            </h1>
          </div>
          <div>
            <h1 style={{ color: "white" }}> Characters</h1>
          </div>
        </div>
        <div className="mrvl_main_div">
          {mydata.map((item, id) => (
            <div key={id} className="mrvl_second_div">
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt=""
              />
              <h4>{item.name}</h4>

              <div className="btn_main-div">
                <div>
                  <button className="dtl_btn">
                    <span className="dtl_icn">
                      <InfoOutlinedIcon />
                    </span>
                    <span className="dtl">INFO</span>
                  </button>
                </div>
                <div>
                  <Drawer />
                </div>
                <div className="wiki_btn_div">
                  <button className="wiki_btn">
                    <span className="wiki_icn">W</span>
                    <span>Wiki</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Marvel;
