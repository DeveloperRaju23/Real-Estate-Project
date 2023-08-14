import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePages/Home";
import About from "../Pages/AboutPages/About";
import Properties from "../Pages/PropertiesPages/Properties";
import PropertiesDetails from "../Pages/HomePages/PropertiesDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
          path: "/properties",
          element:<Properties/>
        },
        {
          path: "/properties/:id",
          element:<PropertiesDetails/>
        }
      ]
    },
  ]);

  export default router