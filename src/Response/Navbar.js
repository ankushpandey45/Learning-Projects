import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Responsive_1.css";
import MenuIcon from "@mui/icons-material/Menu";
import Cards from "./Cards.js";
import Marvel from "./Marvel.js";
import Contact from "./Contact.js";
import Map from "./Map.js";
// import Loadingbtn from "./Loadingbtn.js";
// import Logo from "./Logo";
// import Menu_button from "./Menu_button";
// import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [click, setclick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const homeRef = useRef(null);
  const discoverRef = useRef(null);
  const speacialdealsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollSmooth = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleonClick = () => {
    setclick(true);
  };

  return (
    <div>
      <nav className={scrolled ? "scrolled" : ""}>
        <p className={scrolled ? "logo" : ""}>TraVloG</p>
        <MenuIcon className="Menu_btn" onClick={handleonClick} />
        <ul
          className={`nav-links ${click ? "active" : ""}
        `}
        >
          <li
            className={scrolled ? "li" : ""}
            onClick={() => scrollSmooth(homeRef)}
          >
            Home
          </li>
          <li
            className={scrolled ? "li" : ""}
            onClick={() => scrollSmooth(discoverRef)}
          >
            Discover
          </li>
          <li
            className={scrolled ? "li" : ""}
            onClick={() => scrollSmooth(speacialdealsRef)}
          >
            Speacial deals
          </li>
          <li
            className={scrolled ? "li" : ""}
            onClick={() => scrollSmooth(contactRef)}
          >
            Contact
          </li>
        </ul>
        {/* <Logo /> */}
        {/* <NavLink to="/"></NavLink> */}
        {/* <Menu_button /> */}
        {/* <NavLink to="/Homepage">
           </NavLink>
          <NavLink to="/Discover">
          </NavLink>
          <NavLink to="/Special_Deals">
           </NavLink>
          <NavLink to="/Contact">
        </NavLink> */}
      </nav>

      <div className="main_div">
        <div className="second_div">
          <div className="my_para">
            <button className="Explore">
              Explore the world!
              <img className="img_explore" src="Assets/explore.png" alt="" />
            </button>
            <div className="big_para">
              <div className="flex_div">
                <h1>Travel</h1>
                <h1 className="top">top</h1>
              </div>
              <h1 className="destination">destination</h1>
              <h1 className="world">of the world</h1>
            </div>
            <div className="para">
              <p className="we">we always make our customer happy by</p>
              <p className="pro">providing</p>
              <p>as many choices as posible</p>
            </div>
            <div className="btn_div">
              <div>
                <button className="get_start">
                  <span className="get">Get Started</span>
                </button>
              </div>
              <div>
                <button className="watch_demo">
                  <span className="watch"> Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
          <div className="travel_images">
            <div className="india_div">
              <img
                className="india"
                src="Assets/Travelling-in-India.jpg"
                alt=""
              />
            </div>
            <div className="trips_div">
              <img
                className="trips"
                src="Assets/how-to-get-your-trips-sponsored.webp"
                alt=""
              />
            </div>
            <div className="people_div">
              <img
                className="people"
                src="Assets/People_standing_on_a_mountain.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pic_logo">
          <div>
            <a href="https://www.expedia.com/">
              <img
                src="/Assets/epediaremove.png"
                alt="expedia"
                className="expedia"
              />
            </a>
          </div>
          <div>
            <a href="https://www.booking.com/">
              <img
                src="/Assets/Booking_removed.png"
                alt=""
                className="social-icon"
              />
            </a>
          </div>
          <div>
            <a href="https://www.orbitz.com/">
              <img src="/Assets/orbitz.png" alt="" className="social-icon" />
            </a>
          </div>
          <div>
            <a href="https://www.airbnb.com/">
              <img
                src="/Assets/Airbnb_removed.png"
                alt=""
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="cards_main_div">
        {Cards.map((item, id) => {
          return (
            <div key={id} className="cards" ref={homeRef}>
              <div className="cards_second_div">
                <img className="image_div" src={item.image} alt="" />

                <div className="middle_div">
                  <div className="des_chrg_maindiv">
                    <div>
                      <p className="des">{item.des}</p>
                    </div>
                    <div>
                      <h5 className="chrgs">{item.charges}</h5>
                    </div>
                  </div>
                  <div className="rating">
                    <h6>{item.rating}</h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div ref={speacialdealsRef}>
        <Marvel />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
     <div>
      <Map/>
     </div>
    </div>
  );
};
export default Navbar;
