import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import User from "./User";
import Routercompo2 from "./Routercompo2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },

  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/user",
    element: (
      <>
        <Navbar />
        <User />
      </>
    ),
  },
]);
const Maincompo = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Routercompo2/>
    </div>
  );
};

export default Maincompo;
