import React, { useEffect, useState } from 'react'
import Input from "../../Utils/CommonComponents/Input"
import { RegisterJSON } from "../../Utils/Constants/constant"
import DropDown from '../../Utils/CommonComponents/DropDown';
import "./Register.scss";
import Button from '../../Utils/CommonComponents/Button';
import { useSelector, connect, useDispatch } from 'react-redux';
import { UPDATE_REGISTER_INFO } from '../../Store/ActionType';
const Register = (props) => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
   const [stateJSON,setStateJSON] = useState([]);
   const [DistrictJSON,setDistrictJSON] = useState([]);
   const [cityJSON,setcityJSON] = useState([]);
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [mobileNumber ,setMobileNumber] = useState('');
   const [address,setAddress] = useState('');
   const [pinCode,setPinCode] = useState('');
   const [panCardNumber,setPanCardNo] = useState('');
   const [businessLocation,setBusinessLocation] = useState('');
   const [gstNumber,setGSTNo] = useState('');
   const [logo,setLogo] = useState('');

   const copyDistrictJSON = [];
   const  copyStateJSON = [];
   const copycityJSON = [];
   const copyInputValue = [];
    useEffect(() => {
        const url = "https://appts.in/jobportal/state/all";
        const fetchStateData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            data.map((rec) => {
                rec.value = rec.stateName;
                copyStateJSON.push(rec);
            })
           setStateJSON(copyStateJSON);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchStateData();
    },[])
    const dropDownChangeHandler = (value,type) => {
        if(type == 'state') {
            const url = "https://appts.in/jobportal/district/by?stateId="+ value;
        const fetchDistrictData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            data.map((rec) => {
                rec.value = rec.districtName;
                copyDistrictJSON.push(rec);
            })
            setDistrictJSON(copyDistrictJSON);
        } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchDistrictData();
        } else if (type == 'district') {
            const url = "https://appts.in/jobportal/city/by?districtId="+value;
            const fetchCityData = async () => {
              try {
                const response = await fetch(url);
                const data = await response.json();
                data.map((rec) => {
                    rec.value = rec.cityName;
                    copycityJSON.push(rec);
                })
                setcityJSON(copycityJSON);
            } catch (error) {
                console.log("error", error);
              }
            };
        
            fetchCityData();
        }
        
    }
    const onChangeInputHandler = (value,label) => {
        if(label === 'Name') {
            setName(value)
        } else if (label == 'Email') {
            setEmail(value)
        } else if (label == 'Password') {
            setPassword(value)
        } else if (label == 'Mobile No') {
            setMobileNumber(value)
        } else if (label == 'Address') {
            setAddress(value)
        } else if (label == 'PinCode') {
            setPinCode(value)
        } else if (label == 'PanCard No') {
            setPanCardNo(value)
        } else if (label == 'Business Location') {
            setBusinessLocation(value)
        } else if (label == 'GST No') {
            setGSTNo(value)
        } else if (label == 'Logo') {
            setLogo(value)
        } 
    }
    const registerHandler = async() => {
        const obj = {
           name,
           email,
           password,
           mobileNumber,
           panCardNumber,
           gstNumber,
           pinCode,
           businessLocation,
           address,
           stateId:0,
           districtId:0,
           cityId:0,
           logo
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        const response = await fetch('https://appts.in/jobportal/company/register', requestOptions);
        const data = await response.json();
       dispatch({type:UPDATE_REGISTER_INFO, payload:data});
    }
    return (
        <div className="c-register-container">
            <div className="c-register-inner-container">
                <h3 className="c-register-title">Create an Account {counter}</h3>
                {RegisterJSON.map((rec, index) => {
                    if (rec.type != 'dropDown') {
                        return <>
                            <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                            <Input key={index} label = {rec.label} type={rec.type} className={rec.className} placeholder={rec.placeHolder}
                            isActive={rec.isActive} isRequired={rec.isRequired} onChangeInputHandler = {onChangeInputHandler}/>
                            </>
                    } else if(rec.label == 'State' && rec.type == 'dropDown') {
                        return <>
                            <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                            <DropDown className = "c-drop-down" dropDownChangeHandler = {dropDownChangeHandler} optionList = {stateJSON} type = 'state'/>
                        </>
                    } else if(rec.label == 'District' && rec.type == 'dropDown') {
                        return <>
                        <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                        <DropDown className = "c-drop-down" dropDownChangeHandler = {dropDownChangeHandler} optionList = {DistrictJSON} type = 'district'/>
                    </>
                    }
                    else if(rec.label == 'City' && rec.type == 'dropDown') {
                        return <>
                        <label>{rec.label} {rec.isRequired && <span>*</span>}</label>
                        <DropDown className = "c-drop-down" dropDownChangeHandler = {dropDownChangeHandler} optionList = {cityJSON} type = 'city'/>
                    </>
                    }
                })}
                <Button className = "c-btn c-primary" title ="Register" BtnClickHandler = {registerHandler}/>
            </div>
        </div>
    )
}
export default Register;