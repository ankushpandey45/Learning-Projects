import React, { useState, useEffect } from "react";
import "./Task.css";
const Maincompo = () => {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("+91");
  const [Email, setEmail] = useState("");
  const [Des, setDes] = useState("");
  const [display, setdisplay] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("display");
    if (storedData) {
      setdisplay(JSON.parse(storedData));
    }
  }, []);

  const updateLocalStorage = (data) => {
    localStorage.setItem("display", JSON.stringify(data));
  };

  const Displaybtn = () => {
    const Display = [...display, { Name, Des, Email, Number }];

    setdisplay(Display);
    updateLocalStorage(Display);
    setName("");
    setDes("");
    setEmail("");
    setNumber("+91");
  };

  // const dashNumber = (e) => {
  //   let value = e.target.value;
  //   value = value.split("-").join(" ");
  //   const finalVal = value.match(/.{1,3}/g).join("-");
  //   setNumber(finalVal);
  // };

  const Dltcards = (id) => {
    const dltitem = display.filter((_, i) => i !== id);
    setdisplay(dltitem);
    updateLocalStorage(dltitem);
  };
  return (
    <>
      <div>
        <div className="container">
          <input
            placeholder="Enter Your Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your Number"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            placeholder="Enter Your Email"
            value={Email}
            type="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder=" Desicnation"
            value={Des}
            onChange={(e) => setDes(e.target.value)}
          />
          <button className="sub_btn" onClick={Displaybtn}>
            SUBMIT
          </button>
        </div>
        <div className="cards-div">
          {display.map((item, id) => (
            <div className="li-div">
              <li className="li" key={id}>
                <span className="li-span">
                  <div className="name">Name :- {item.Name}</div>
                  <div className="number">Number :- {item.Number}</div>
                  <div className="email">Email :- {item.Email}</div>
                  <div className="des">Desicnation :- {item.Des}</div>
                </span>
              </li>
              <button className="dlt-btn" key={id} onClick={() => Dltcards(id)}>
                x
              </button>
              <button className="edit-btn">Edit</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Maincompo;
