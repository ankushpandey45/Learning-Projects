import Homepage from "./Homepage";
import Navbar2 from "./Navbar2";
import Userpage from "./Userpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar2 />
        <Homepage />
      </>
    ),
  },
  {
    path: "/Userpage",
    element: (
      <>
        <Navbar2 />
        <Userpage />
      </>
    ),
  },
]);

const Routercompo2 = () => {
  return (
    <div>
      <>
        <RouterProvider router={router} />
      </>
    </div>
  );
};

export default Routercompo2;
