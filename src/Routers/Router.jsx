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
import ManegeItem from "../Pages/Dashboard/manegeItem/ManegeItem";
import UpdateMenu from "../Pages/Dashboard/UpdateMenu/UpdateMenu";
import Payment from "../Pages/Dashboard/Payment/Payment";


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
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  },
  {
    path: '/secret',
    element: <PrivetRouter><Secret></Secret></PrivetRouter>
  },
  {
    path: 'dashboard',
    element: <PrivetRouter><Dashboard></Dashboard></PrivetRouter>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      // admin section
      {
        path: 'addItems',
        element: <AdminRouter><AddItems></AddItems></AdminRouter>
      },
      {
        path: 'manageItems',
        element: <AdminRouter><ManegeItem></ManegeItem></AdminRouter>
      },
      {
        path: 'updateMenu/:id',
        element: <AdminRouter><UpdateMenu></UpdateMenu></AdminRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRouter><AllUser></AllUser></AdminRouter>
      }
    ]
  }
]); 