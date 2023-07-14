import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Career from "../components/Career/Career";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
          },
          {
            path: "/Career",
            element: <Career></Career>
          },
      ],
    },
  ]);


  export default router;