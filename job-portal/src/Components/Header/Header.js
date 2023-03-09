import Button from "../../Utils/CommonComponents/Button";
import "./Header.scss";
import {Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_LOGIN_INFO } from "../../Store/ActionType";
const Header = (props) => {
   const dispatch = useDispatch();
const {
    headerData
} = props;
const token = localStorage.getItem('token');
    if(token) {
        dispatch({type:UPDATE_LOGIN_INFO, payload : token})
    } else {
        dispatch({type:UPDATE_LOGIN_INFO, payload : ''})
    }
    const Updatedtoken = useSelector(state => state.token);
const signInHandler = () => {
    console.log("signIn")
}
const registerHandler = () => {
    console.log("registerHandler");
}
const logOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    dispatch({type:UPDATE_LOGIN_INFO, payload : ''})
}
return (
    <>
    <header className="c-header">
        <section className="c-logo">
            <h3 className="c-title">
                <a href="/">
                <span>{headerData.headerTitle1}</span>
                <span className="c-title-color">{headerData.headerTitle2}</span>
                </a>
            </h3>
        </section>
            <ul className="c-nav-bar">
                {headerData.HeaderLabelList.map((rec,index) => {
                    return <li key={index}>{rec.lable}</li>
                })}
            </ul>
        <section className="c-acticon-container">
            {!Updatedtoken && <a href="/login"><Button title="SignIn" className="c-btn c-primary" BtnClickHandler = {signInHandler}/></a>}
            {Updatedtoken && <a href="/login"><Button title="logOut" className="c-btn c-primary" BtnClickHandler = {logOutHandler}/></a>}
            <a href="/register"><Button title="Register" className="c-btn c-secondary" BtnClickHandler = {registerHandler}/></a>
        </section>
    </header>
    <Outlet/>
    </>
)
}

export default Header;