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
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddItems from "../Pages/Dashboard/AddItem/AddItems";
import AdminRouter from "./AdminRouter";


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
    },
    {
      path: 'dashboard',
      element: <PrivetRouter><Dashboard></Dashboard></PrivetRouter>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        // admin section
        {
          path: 'addItems',
          element: <AdminRouter><AddItems></AddItems></AdminRouter>
        },
        {
          path: 'users',
          element: <AdminRouter><AllUser></AllUser></AdminRouter>

        }
      ]
    }
  ]); 