import React, {useEffect,useState} from "react";
import { useSelector, connect, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { UPDATE_REGISTER_INFO,UPDATE_PROFILE_NAME } from '../../Store/ActionType';
import "./Register.scss";
import "../../Utils/CommonComponents/DropDown.scss";
import { companyInitialValues, 
        candidateInitialStateValues,
        companyRegisterJSON,
        candidateRegisterJSON,
        stateUrl,
        districtUrl,
        cityUrl,
        companyRegisterUrl,
        candidateRegisterUrl
 } from "../../Utils/Constants/constant";
import Input from "../../Utils/CommonComponents/Input";
import Button from '../../Utils/CommonComponents/Button';
const Register = (props) => {
   const navigation = useNavigate();
   const[companyValues,setCompanyValues] = useState(companyInitialValues);
   const[candidateValues,setCandidateValues] = useState(candidateInitialStateValues);
   const [stateJSON,setStateJSON] = useState([]);
   const [DistrictJSON,setDistrictJSON] = useState([]);
   const [cityJSON,setcityJSON] = useState([]);
   const profile = useSelector(state => state.profileName);
   const dispatch = useDispatch();
   const[isBtnDisable, setIsBtnDisable] = useState(true);
   useEffect(() => {
    fetchStateData();
},[])
const fetchStateData = async () => {
    try {
      const response = await fetch(stateUrl);
      const data = await response.json();
     /*  setCompanyValues({
        ...companyValues,
        'stateId': data[0].id,
    }); */
     setStateJSON(data);
     fetchDistrictData(data[0].id,true);
    } catch (error) {
      console.log("error", error);
    }
};

const fetchDistrictData = async (Id) => {
    const url = districtUrl+Id;
    try {
        const response = await fetch(url);
        const data = await response.json();
       /*  setCompanyValues({
            ...companyValues,
            'districtId': data[0].id,
        }); */
        setDistrictJSON(data);
        fetchCityData(data[0].id);
    } catch (error) {
        console.log("error", error);
    }
};
const fetchCityData = async (Id) => {
    const url = cityUrl+Id;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setcityJSON(data);
     /*  setCompanyValues({
        ...companyValues,
        'cityId': data[0].id,
    }); */
  } catch (error) {
      console.log("error", error);
    }
  };
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
   const onChangeInputHandler = (value,label) => {
   
    if(profile === 'candidate') {
        setCandidateValues({
            ...candidateValues,
            [label]: value,
        });
    } else if (profile === 'company') {
        setCompanyValues({
            ...companyValues,
            [label]: value,
        });
    }
    }
    const registerHandler = async() => {
        if(profile === 'company') {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(companyValues)
            };
            const response = await fetch(companyRegisterUrl, requestOptions);
            const data = await response.json();
           dispatch({type:UPDATE_REGISTER_INFO, payload:data});
           //setCompanyValues(companyInitialValues);
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(candidateValues)
            };
            const response = await fetch(candidateRegisterUrl, requestOptions);
            try {
                const data = await response.json();
                dispatch({type:UPDATE_REGISTER_INFO, payload:data});
                setCandidateValues(candidateInitialStateValues);
            } catch(error) {
                console.log(error);
            }
           
        }

        navigation('/login')

       
    }
    const dropDownChangeHandler = (event) => {
        const {name,value} = event.target;
        if(name === 'stateId') {
        fetchDistrictData(value);
        } else if(name === 'districtId') {
            fetchCityData(value);
        }
        setCompanyValues({
            ...companyValues,
            [name]: value,
        });

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
                                {stateJSON.map(({ stateName, id }, index) => <option value={id} >{stateName}</option>)}
                            </select>
                        </>
                    } else if(rec.label == 'District' && rec.type == 'dropDown') {
                        return <>
                        <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                        <select className = "c-drop-down" onChange = {dropDownChangeHandler} name = {rec.text}>
                                {DistrictJSON.map(({ districtName, id }, index) => <option value={id} >{districtName}</option>)}
                        </select>
                    </>
                    }
                    else if(rec.label == 'City' && rec.type == 'dropDown') {
                        return <>
                        <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                        <select className = "c-drop-down" onChange = {dropDownChangeHandler} name = {rec.text}>
                                {cityJSON.map(({ cityName, id }, index) => <option value={id} >{cityName}</option>)}
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
        </div>
    )
}
export default Register;