import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Layout from "../Layout/Layout";
import Menu from "../Manu/Main/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRouter from "./PrivetRouter";
import Secret from "../Pages/Home/Sheared/Secret/Secret";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
           path: '/',
           element: <Home></Home> 
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        }
      ], 
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path: '/signUp',
      element: <SignUp></SignUp>
    },
    {
      path: '/secret',
      element:<PrivetRouter><Secret></Secret></PrivetRouter>
    }
  ]); 