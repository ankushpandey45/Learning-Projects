import React from "react";
import "./Responsive_1.css";


// import HomePage from "./Homepage";
// import Discover from "./Discover";
// import Speacialdeals from "./Speacialdeals";
// import Contact from "./Contact";
// import Logo from "./Logo";
// import Buttons from "./Buttons";
import Navbar from "./Navbar";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/logo",
//     element: (
//       <>
//         <Navbar />
//         <Logo />
//       </>
//     ),
//   },
//   {
//     path: "/Homepage",
//     element: (
//       <>
//         <Navbar />
//         <HomePage />
//       </>
//     ),
//   },
//   {
//     path: "/Discover",
//     element: (
//       <>
//         <Navbar />
//         <Discover />
//       </>
//     ),
//   },
//   {
//     path: "/Speacialdeals",
//     element: (
//       <>
//         <Navbar />
//         <Speacialdeals />
//       </>
//     ),
//   },
//   {
//     path: "/Contact",
//     element: (
//       <>
//         <Navbar />
//         <Contact />
//       </>
//     ),
//   },
// ]);
const Responsive = () => {
  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <Navbar/>
    </div>
  );
};

export default Responsive;
