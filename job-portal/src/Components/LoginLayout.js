import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar/Sidebar';
import { SidebarJSON, FooterJSON } from '../Utils/Constants/constant';
import Footer from './Footer/Footer';
const LoginLayout = () => {
    return (
        <>
        <div className='c-login-layout-container'>
            <Sidebar sidebar = {SidebarJSON}/>
            <main>
                <Outlet/>
            </main>
            </div>
            <Footer footerData = {FooterJSON}/>
            </>
        
    )
}

export default LoginLayout;