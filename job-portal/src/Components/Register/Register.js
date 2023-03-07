import React, {useEffect,useState} from "react";
import { useSelector,  useDispatch } from 'react-redux';
import {useLoaderData } from "react-router-dom";
import { UPDATE_REGISTER_INFO,UPDATE_PROFILE_NAME,UPDATE_SHOW_MODAL_WINDOW} from '../../Store/ActionType';
import {useToasts } from 'react-toast-notifications';
import "./Register.scss";
import "../../Utils/CommonComponents/DropDown.scss";
import { companyInitialValues, 
        candidateInitialStateValues,
        companyRegisterJSON,
        candidateRegisterJSON,
        companyRegisterUrl,
        candidateRegisterUrl,
        otpModalJSON
 } from "../../Utils/Constants/constant";
import Input from "../../Utils/CommonComponents/Input";
import Button from '../../Utils/CommonComponents/Button';
import ModalWindow from "../../Utils/CommonComponents/ModalWindow";
import { featchDistrictData, featchCityData } from "../../Utils/Constants/DataLoader";
const Register = (props) => {
   const locationData = useLoaderData();
   const { addToast } = useToasts();
   const [stateJSON,setStateJSON] = useState(locationData.stateData);
   const [DistrictJSON,setDistrictJSON] = useState(locationData.districtData);
   const [cityJSON,setcityJSON] = useState(locationData.cityData);
    useEffect (() => {
        setCompanyValues({
            ...companyValues,
            stateId:stateJSON[0].id,
            districtId:DistrictJSON[0].id,
            cityId:cityJSON[0].id
        });
    }, [locationData])
   const[companyValues,setCompanyValues] = useState(companyInitialValues);
   const[candidateValues,setCandidateValues] = useState(candidateInitialStateValues);
   
   const profile = useSelector(state => state.profileName);
   const dispatch = useDispatch();
   const[isBtnDisable, setIsBtnDisable] = useState(true);
   const showModal = useSelector(state => state.showModal);
   const [otpId, setOtpId] = useState('');
   const onchangeRadioHandler = (event) => {
        dispatch({type:UPDATE_PROFILE_NAME, payload:event.target.value})
   }
   const onBlurInputHandler = (isError,label,isRequired) => {
       if (profile === 'company') {
           let isDisableBtn = false;
           const RecIndex = companyRegisterJSON.findIndex((rec) => {
               return rec.text === label;
           })
           if (RecIndex != -1) {
               companyRegisterJSON[RecIndex].isError = isError;
           }
           for (let i = 0; i < companyRegisterJSON.length; i++) {
               let comapnyData = companyRegisterJSON[i];
               if (comapnyData.isRequired) {
                   if (!companyValues[comapnyData.text]) {
                       isDisableBtn = true;
                       break;
                   } else {
                       if (isError) {
                           isDisableBtn = true;
                           break;
                       }
                   }
                   if (comapnyData?.isError) {
                       isDisableBtn = true;
                       break;
                   }
               }
           }
           if (isDisableBtn) {
               setIsBtnDisable(true)
           } else {
               setIsBtnDisable(false);
           }
       }
       if (profile === 'candidate') {
        let isDisableBtn = false;
        const RecIndex = candidateRegisterJSON.findIndex((rec) => {
            return rec.text === label;
        })
        if (RecIndex != -1) {
            candidateRegisterJSON[RecIndex].isError = isError;
        }
        for (let i = 0; i < candidateRegisterJSON.length; i++) {
            let candidateData = candidateRegisterJSON[i];
            if (candidateData.isRequired) {
                if (!candidateValues[candidateData.text]) {
                    isDisableBtn = true;
                    break;
                } else {
                    if (isError) {
                        isDisableBtn = true;
                        break;
                    }
                }
                if (candidateData?.isError) {
                    isDisableBtn = true;
                    break;
                }
            }
        }
        if (isDisableBtn) {
            setIsBtnDisable(true)
        } else {
            setIsBtnDisable(false);
        }
    }
   }
   const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    })
   const onChangeInputHandler = (value,label,type) => {
    if(profile === 'candidate') {
        if(type === 'file') {
            let file = value.target.files[0];
            if(!file) {
                return;
              }
              fileToDataUri(file)
                .then(dataUri => {
                    setCandidateValues({
                        ...candidateValues,
                        [label]: dataUri,
                    });
                })
           } else {
            setCandidateValues({
                ...candidateValues,
                [label]: value,
            });
           }
        
    } else if (profile === 'company') {
        if(type === 'file') {
            let file = value.target.files[0];
            if(!file) {
                return;
              }
              fileToDataUri(file)
                .then(dataUri => {
                    setCompanyValues({
                        ...companyValues,
                        [label]: dataUri,
                    });
                })
           } else {
            setCompanyValues({
                ...companyValues,
                [label]: value,
            });
           }
       
    }
    }
    const registerHandler = async() => {
        let url = ''
        let jsonValue = ''
        if(profile === 'company') {
            url = companyRegisterUrl;
            jsonValue = companyValues;
        } else {
            url = candidateRegisterUrl;
            jsonValue = candidateValues;
        }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jsonValue)
            };
                const response = await fetch(url, requestOptions);
                const data = await response.json();
                if (response.status === 200) {
                    setOtpId(data.otpId);
                    dispatch({type:UPDATE_REGISTER_INFO, payload:data});
                    dispatch({type:UPDATE_SHOW_MODAL_WINDOW, payload:true});
                    {profile == 'company' ?  setCompanyValues(companyInitialValues) : setCandidateValues(candidateInitialStateValues)}
                } else {
                    addToast(data.message, { appearance: 'error'});
                }
    }
    const dropDownChangeHandler = async (event) => {
        const {name,value} = event.target;
        if(name === 'stateId') {
            const updatedDistrictData = await featchDistrictData(value);
            setDistrictJSON(updatedDistrictData);
            const updatedCityData = await featchCityData(updatedDistrictData[0].id);
            setcityJSON(updatedCityData);
            setCompanyValues({
                ...companyValues,
                [name]: parseInt(value),
                cityId:updatedCityData[0].id
            });
        } else if(name === 'districtId') {
            const updatedCityData = await featchCityData(value);
            setcityJSON(updatedCityData);
            setCompanyValues({
                ...companyValues,
                [name]: parseInt(value),
            });
        }
        else if(name === 'cityId') {
            setCompanyValues({
                ...companyValues,
                [name]: parseInt(value),
            });
        }
    }
    return (
        <div className="c-register-container">
            <div className="c-register-inner-container">
                <h3 className="c-register-title">Create an Account</h3>
                <div className="c-select-profile">
                    <div><input type="radio" value="candidate" onChange={onchangeRadioHandler} name="profile" checked={profile === "candidate"} /> Candidate</div>
                    <div><input type="radio" value="company" onChange={onchangeRadioHandler} name="profile" checked={profile === "company"}/> company</div>
                </div>
                {profile === 'company' && <>
                {companyRegisterJSON.map((rec, index) => {
                    if (rec.type != 'dropDown') {
                        return <>
                            <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                            <Input key={index} message = {rec.label}  label = {rec.text} type={rec.type} className={rec.className} placeholder={rec.placeHolder}
                            isActive={rec.isActive} isRequired={rec.isRequired} onChangeInputHandler = {onChangeInputHandler} onBlurInputHandler = {onBlurInputHandler}/>
                            </>
                    } else if(rec.label == 'State' && rec.type == 'dropDown') {
                        return <>
                            <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                            <select className = "c-drop-down" onChange = {dropDownChangeHandler} name = {rec.text}>
                                {stateJSON.map(({ stateName, id }, index) => <option value={id} key = {id} >{stateName}</option>)}
                            </select>
                        </>
                    } else if(rec.label == 'District' && rec.type == 'dropDown') {
                        return <>
                        <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                        <select className = "c-drop-down" onChange = {dropDownChangeHandler} name = {rec.text}>
                                {DistrictJSON.map(({ districtName, id }, index) => <option value={id} key = {id}>{districtName}</option>)}
                        </select>
                    </>
                    }
                    else if(rec.label == 'City' && rec.type == 'dropDown') {
                        return <>
                        <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                        <select className = "c-drop-down" onChange = {dropDownChangeHandler} name = {rec.text}>
                                {cityJSON.map(({ cityName, id }, index) => <option value={id} key = {id}>{cityName}</option>)}
                        </select>
                    </>
                    }
                })}
                </>
                }
                {profile === 'candidate' && <>
                {candidateRegisterJSON.map((rec, index) => {
                    if (rec.type != 'dropDown') {
                        return <>
                            <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                            <Input key={index} message = {rec.label}  label = {rec.text} type={rec.type} className={rec.className} placeholder={rec.placeHolder}
                            isActive={rec.isActive} isRequired={rec.isRequired} onChangeInputHandler = {onChangeInputHandler} onBlurInputHandler = {onBlurInputHandler}/>
                            </>
                    } 
                })}
                </>}
                <Button disabled = {isBtnDisable} className = "c-btn c-primary" title ="Register" BtnClickHandler = {registerHandler}/>
            </div>
            {showModal && <ModalWindow otpId = {otpId} otpModalJSON = {otpModalJSON}/>}
        </div>
    )
}
export default Register;