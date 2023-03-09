import {jobFilterJSON, searchUrl} from '../../Utils/Constants/constant';
import Input from '../../Utils/CommonComponents/Input';
import { useState } from 'react';
import Button from '../../Utils/CommonComponents/Button';
import  './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_JOBS } from '../../Store/ActionType';
import JobCard from './JobCard';
import { useToasts } from 'react-toast-notifications';
import JobFilter from './JobFilter';

const Home = (props) => {
    const[jobLocation,setJobLocation] = useState('');
    const[jobTitle,setJobTitle] = useState('');
    const dispatch = useDispatch();
    const jobsList = useSelector(state => state.jobs);
    const { addToast } = useToasts();
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
        const token = localStorage.getItem('token');
        let url = searchUrl;
        if(jobLocation) {
            url = url + '?jobLocation=' + jobLocation;
            if (jobTitle) {
                url = url + '&jobTitle=' + jobTitle;
            }
        } if(jobTitle) {
            url = url + '?jobTitle=' + jobTitle;
        }
        const response = await fetch(url);
        const data = await response.json();
        if(response.status === 200) {
            if(data.length === 0) {
                addToast('No Search Result! Please Search again', { appearance: 'success'});
            }
            dispatch({type:"UPDATE_JOBS", payload:data});
        } else {
            addToast(data.message, { appearance: 'error'});
        }
        setJobLocation('');
        setJobTitle('');
            
    }
    return (
        <div className='c-home-container'>
            <div className='c-job-search-container'>
            <Input value = {jobLocation} message = 'Job Location ' onBlurInputHandler = {onBlurInputHandler}  label = 'jobLocation' type="text" className="c-input-text" placeholder="Job Title, Company"
            isActive= {false} isRequired= {false} onChangeInputHandler = {onChangeInputHandler}/>
            <Input value = {jobTitle} message = 'jobTitle ' onBlurInputHandler = {onBlurInputHandler}  label = 'jobTitle' type="text" className="c-input-text" placeholder="City, State, Pin Code"
            isActive= {false} isRequired= {false} onChangeInputHandler = {onChangeInputHandler}/>
            <Button disabled = {false} className = "c-btn c-primary" title ="Search Job" BtnClickHandler = {searchHandler}/>
            </div>
            {jobsList.length > 0 && 
                <div className='c-job-list-contatiner'>
                    <div className='c-job-filter'>
                        <JobFilter jobFilterJSON = {jobFilterJSON}/>
                    </div>
                    <div className='c-job-list'>
                    {jobsList.map((rec) => {
                        return <JobCard jobRec = {rec} key = {rec.id}/>
                    })}
                    </div>
                </div>
            }
        </div>
    )
}
export default Home;