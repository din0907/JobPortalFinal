import Footer from '../Footer/Footer';
import {searchUrl} from '../../Utils/Constants/constant';
import Input from '../../Utils/CommonComponents/Input';
import { useState } from 'react';
import Button from '../../Utils/CommonComponents/Button';
const Home = (props) => {
    const[jobLocation,setJobLocation] = useState('');
    const[jobTitle,setJobTitle] = useState('');
    const onBlurInputHandler = (isError,label,isRequired) => {
    }
    const onChangeInputHandler = (value,label) => {
        if(label === 'jobLocation') {
            setJobLocation(value);
        } else {
            setJobTitle(value);
        }
       
    }
    const searchHandler = async() => {
        console.log(jobLocation);
        console.log(jobTitle);
        const url = searchUrl + '?jobLocation=' + jobLocation + '&jobTitle=' + jobTitle;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "Authorization": 'Bearer ' + localStorage.getItem('token') },
        };
        const response = await fetch(url, requestOptions);
        try {
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            
            <label>Job Location</label>
                <Input  message = 'Job Location ' onBlurInputHandler = {onBlurInputHandler}  label = 'jobLocation' type="text" className="c-input-text" placeholder="Please Enter job Location"
                isActive= 'false' isRequired= "false" onChangeInputHandler = {onChangeInputHandler}/>
                <label>User Name</label>
                <Input  message = 'jobTitle ' onBlurInputHandler = {onBlurInputHandler}  label = 'jobTitle' type="text" className="c-input-text" placeholder="Please Enter jobTitle"
                isActive= 'false' isRequired= "false" onChangeInputHandler = {onChangeInputHandler}/>
                <Button disabled = {false} className = "c-btn c-primary" title ="Login" BtnClickHandler = {searchHandler}/>
        </div>
    )
}
export default Home;