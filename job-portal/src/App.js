import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Header from './Components/Header/Header';
import { HeaderJSON,FooterJSON ,SidebarJSON} from './Utils/Constants/constant';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/SideBar/Sidebar';
import Badge from './Components/Badge/Badge';
const App = () => {
  const onClickHandler = () => {
    console.log("Dinesh");
  }
  const bageJSON = [
    {
      title:"Front End Dev",
    },
    {
      title:"Java Dev",
    },
    {
      title:"Full Stack Dev",
    },
    {
      title:"QA",
    },
    {
      title:"Work From Home",
    },
    {
      title:"Remote Job in Home Location",
    }
  ]

  const latestJobJSON = [
      {
        logo:'',
        jobTitle:"React Dev",
        companyName:"Hitachi",
        location: {
          logo:'',
          locationName:'Jaipur'
        },
        student: {
          logo:'',
          Name:"Dinesh"
        },
        jobType:"Full Time",
        isActive:false
      }

  ]
  return(
    <>
      <Header headerData = {HeaderJSON}/>
      <div className='c-main-content'>
        <Sidebar  sidebar={SidebarJSON}/>
        <div className='c-content'>
      {bageJSON.map((rec,index)=> {
        return <Badge key = {index} title = {rec.title} className = "c-badge"/>
      })
      }
        </div>
      </div>
      <Footer footerData={FooterJSON}/>
    </>
  )
}

export default App;