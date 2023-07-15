import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Career from "../components/Career/Career";
import Catagoris from "../components/home/Catagoris";
import NewsLayout from "../components/home/page/NewsLayout";
import News from "../components/home/page/News";

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
          {
            path: "/catagori/:id",
            element: <Catagoris></Catagoris>,
            loader:({params})=>fetch(`http://localhost:4000/catagoris/${params.id}`)
            
          },
      ],
      
    },
    {
      path:"/news",
      element: <NewsLayout></NewsLayout>,
      children:[
        {
          path:"/news/:id",
          element:<News></News>
        }
      ]
    }
  ]);


  export default router;