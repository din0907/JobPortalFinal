import { React } from 'react'
import Input from '../../Utils/CommonComponents/Input';
import "./Sidebar.scss"

const Sidebar = (props) => {
    const {
        sidebar
    } = props;
    return (
        <div className="c-sidebar-container">
           <Input type = "text" placeholder = "Search Jobs" className = "c-input-text"/>
            <ul className="c-sidebarLable">
                {sidebar.map((rec, index) => {
                    return (<li key={index}>
                        <i className={rec.icon}></i>
                        <a>{rec.lable}</a>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Sidebar;