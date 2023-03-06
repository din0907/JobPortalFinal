import { useState } from "react";
import "./Input.scss";
const Input = (props) => {
    const {
        type,
        placeholder,
        className,
        label,
        isActive,
        isRequired,
        message
    } = props;
    const[inputValue,setInputValue] = useState('');
    const[isError,setIsError] = useState(false)
    const[isEmailValid,setEmailValid] = useState(false)
    const onChangeHandler = (event) => {
        if(type === 'number') {
            let val = event.target.value
            let maxLength = 10;
            let newValue = val < maxLength ? val : parseInt(val.toString().substring(0, maxLength));
            setInputValue(newValue);
            props.onChangeInputHandler(newValue,label,type);
        } else if(type === 'file') {
            setInputValue(event.target.value);
            props.onChangeInputHandler(event,label,type);
        } else {
            setInputValue(event.target.value);
            props.onChangeInputHandler(event.target.value,label,type);
        }
    }
    const blurHandler = (event) => {
        let isError = false;
        if(isRequired) {
            if(inputValue == '') {
                setIsError(true);
               isError = true;
            } else {
                setIsError(false);
            }
        }
        if(label === 'email') {
            var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
            if(!inputValue.match(pattern)) {
                setEmailValid(true);
                isError = true;
            } else {
                setEmailValid(false);
            }
        }
        if(isError) {
            props?.onBlurInputHandler(true,label,isRequired);
        } else {
            props?.onBlurInputHandler(false,label,isRequired);
        }
       
      
    }

    return (
        <>
        {isError && <span className="error-text">{message} is Required</span>}
        {isEmailValid && <span className="error-text">Email is not Valid</span>}
        <input type={type}  onBlur = {blurHandler} placeholder = {placeholder} className = {isError || isEmailValid ? className + ' ' + "error " : className} value = {inputValue} onChange = {onChangeHandler}/>
        </>
    )
}
export default Input;