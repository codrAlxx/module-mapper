import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import Loader from './Loader'
import { useNavigate } from 'react-router-dom';
import './HomePage.scss'

const FormComponent = () => {
const [inputValue, setInputValue] = useState('');
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();

const handleInputChange = (e) => {
    setInputValue(e.target.value);
};

const handleButtonClick = () => {
    setIsLoading(true);
    console.log(inputValue)
    fetch(`http://localhost:8090/process-all/?dir_path=${inputValue}`)
    .then(response => response.json())
    .then(() => {
        setIsLoading(false);
        console.log("Data fetched successfully");
        navigate('/tree'); // Navigate to /tree path
    })
    .catch(error => {
        setIsLoading(false);
        console.error("Error fetching data: ", error);
        navigate('/tree'); 
    });
};

return (
    <>
        {isLoading ?  
            <Loader /> :

            <div>
                <div class="section full-height over-hide">	
                    <h1>REPO MAPPER</h1>
	            </div>	
                <div className="form">
                    <input 
                        type="text" 
                        className="form__input" 
                        placeholder="Enter Github Repo or File Path......"
                        value={inputValue}
                        onChange={handleInputChange}
                    />                     
                    <div className="btn btn__primary" onClick={handleButtonClick}>
                        <IoSend className="icon-arrow"/>
                    </div>
                </div>
            </div>


        }
    </>
);
};

export default FormComponent;