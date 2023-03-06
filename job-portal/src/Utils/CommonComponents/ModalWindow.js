import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UPDATE_SHOW_MODAL_WINDOW } from '../../Store/ActionType';
import { companyOTP,candidateOtp } from '../Constants/constant';
import Button from './Button';
import Input from './Input';
const ModalWindow = (props) => {
    const {otpId,otpModalJSON} = props;
    const showModal = useSelector(state => state.showModal);
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [inputValue,setInputValue] = useState('');
    const profile = useSelector(state => state.profileName);
  const ModalClickHandler = async() =>  {
    let obj = {
        otp:inputValue,
        otpId
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };
    let url = '';
    if(profile === 'candidate'){
        url = candidateOtp;
    } else {
        url = companyOTP;
    }
    try {
    const response = await fetch(url, requestOptions);
   
        const data = await response.json();
        console.log(data);
        navigation('/login')
       /*  dispatch({type:UPDATE_REGISTER_INFO, payload:data});
        setCandidateValues(candidateInitialStateValues); */
    } catch(error) {
        console.log(error);
    }
    dispatch({type:UPDATE_SHOW_MODAL_WINDOW, payload:false})
  };
  const onChangeInputHandler = (value,label,type) => {
    setInputValue(value);
  } 
  const onBlurInputHandler = (isError,label,isRequired) => {
    console.log("abc")
  }
  const handleClose = () => {
    dispatch({type:UPDATE_SHOW_MODAL_WINDOW, payload:false})
  }
    return(
        <Modal show={showModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {otpModalJSON.map((rec, index) => {
                        return <>
                            <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                            <Input key={index} message = {rec.label}  label = {rec.text} type={rec.type} className={rec.className} placeholder={rec.placeHolder}
                            isActive={rec.isActive} isRequired={rec.isRequired} onChangeInputHandler = {onChangeInputHandler} onBlurInputHandler = {onBlurInputHandler}/>
                            </>
                })}
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <Button disabled = {false} className = "c-btn c-primary" title ="Validate" BtnClickHandler = {ModalClickHandler}/>
        </Modal.Footer>
      </Modal>
    )
}
export default ModalWindow;