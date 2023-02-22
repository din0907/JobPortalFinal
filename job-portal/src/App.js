import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import { HeaderJSON,FooterJSON ,SidebarJSON} from './Utils/Constants/constant';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/SideBar/Sidebar';
const App = () => {
  const onClickHandler = () => {
    console.log("Dinesh");
  }
  const name = "Dinesh";
  return(
    <>
      <Header headerData = {HeaderJSON}/>
      <div className='c-main-content'>
        <Sidebar  sidebar={SidebarJSON}/>
        <div className='c-content'></div>
      </div>
      
      <Footer footerData={FooterJSON}/>
    </>
  )
}

export default App;