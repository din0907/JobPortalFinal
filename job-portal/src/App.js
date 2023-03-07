import React, {useEffect} from 'react'
import './App.css';
import Header from './Components/Header/Header';
import { HeaderJSON} from './Utils/Constants/constant';
import { ToastProvider } from 'react-toast-notifications';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'; 
import Badge from './Components/Badge/Badge';
import Register from './Components/Register/Register';
import Sidebar from './Components/SideBar/Sidebar';
import {FooterJSON ,SidebarJSON} from './Utils/Constants/constant';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Logout from './Components/Logout/Logout';
import ErrorComponent from './Utils/CommonComponents/ErrorComponent';
import { stateDataLoader } from './Utils/Constants/DataLoader';
import LoginLayout from './Components/LoginLayout';
const router = createBrowserRouter (
  [
    {path:'',  element:<Header headerData = {HeaderJSON}/>, errorElement :<ErrorComponent/>,
    children:[
      {path:'register',  element:<Register/>, loader:stateDataLoader},
      {path:'login',  element:<Login />},
      {path:'home',  element:<LoginLayout />,
        children: [
          {index:true, element:<Home/>}
        ],
      },
      {path:'logout',  element:<Logout />},
    ]
    }
  ]
);
const App = () => {
  return(
    <ToastProvider>
    <RouterProvider router={router}/>
    </ToastProvider>
  )
}

export default App;