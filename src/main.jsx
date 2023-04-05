import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Layout/Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Shop from './components/Shop/Shop'
import Orders from './Orders/Orders'
import Inventory from './Inventory/Inventory'
import Login from './Login/Login'
import cartLoader from './loaders/cartOrdersLoader'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [
      {
        path : "/",
        element : <Shop></Shop>
      },
      {
        path : "/orders",
        element : <Orders></Orders>,
        loader : cartLoader
      },
      {
        path : "/inventory", 
        element : <Inventory></Inventory>
      },
      {
        path : "/login",
        element : <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
