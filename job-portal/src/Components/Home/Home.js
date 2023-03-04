import Footer from '../Footer/Footer';
import Sidebar from '../SideBar/Sidebar';
import {FooterJSON ,SidebarJSON} from '../../Utils/Constants/constant';
const Home = (props) => {
    return (
        <div>
            <Sidebar sidebar = {SidebarJSON}/>
            <div>
            Home
            </div>    
            <Footer footerData = {FooterJSON}/>
        </div>
    )
}
export default Home;