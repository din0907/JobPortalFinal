import React, {useEffect} from 'react'
import './App.css';
import Header from './Components/Header/Header';
import { HeaderJSON} from './Utils/Constants/constant';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'; 
import Badge from './Components/Badge/Badge';
import Register from './Components/Register/Register';
import Sidebar from './Components/SideBar/Sidebar';
import {FooterJSON ,SidebarJSON} from './Utils/Constants/constant';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Logout from './Components/Logout/Logout';
const router = createBrowserRouter (
  [
    {path:'/',  element:<Sidebar sidebar = {SidebarJSON}/>},
    {path:'/register',  element:<Register/>},
    {path:'/login',  element:<Login />},
    {path:'/home',  element:<Home />},
    {path:'/logout',  element:<Logout />},

  ]
);
const App = () => {
  return(
    <>
    <Header headerData = {HeaderJSON}/>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;