import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePages/Home";
import About from "../Pages/AboutPages/About";

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
      ]
    },
  ]);

  export default router