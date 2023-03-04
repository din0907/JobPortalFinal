import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginLogo from "../../assets/login.jpg"
import { UPDATE_LOGIN_INFO } from "../../Store/ActionType";
import Button from "../../Utils/CommonComponents/Button";
import Input from "../../Utils/CommonComponents/Input";
import { loginUrl } from "../../Utils/Constants/constant";
import './Login.scss';
const Login = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const initialLocalState = {
        username:'',
        password:''
    };
    const[loginState,setLoginState] = useState(initialLocalState);

    const onChangeInputHandler = (value,label) => {
        setLoginState({
            ...loginState,
            [label]: value,
        });
    }
    const loginHandler = async() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginState)
        };
        const response = await fetch(loginUrl, requestOptions);
        try {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.id);
            localStorage.setItem("username", data.username);
            localStorage.setItem("role",data.roles[0]);
            dispatch({type:UPDATE_LOGIN_INFO, payload:data});
            navigation('/home')
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <div className="c-login-container">
            <div className="c-image-container">
                <img src={loginLogo}/>
            </div>
            <div className="c-login-inner-container">
                <div>
                    <label>User Name <span>*</span></label>
                    <Input  message = 'User Name'  label = 'username' type="text" className="c-input-text" placeholder="Please Enter User Name"
                    isActive= 'false' isRequired= "true" onChangeInputHandler = {onChangeInputHandler}/>
                </div>
                <div>
                    <label>Password <span>*</span></label>
                    <Input message = 'Password'  label = 'password' type="password" className="c-input-text" placeholder="Please Enter password"
                    isActive= 'false' isRequired= "true" onChangeInputHandler = {onChangeInputHandler}/>
                </div>
                <Button className = "c-btn c-primary" title ="Register" BtnClickHandler = {loginHandler}/>
            </div>
        </div>
    )
}

export default Login;