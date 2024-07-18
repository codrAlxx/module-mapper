import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import './HomePage.scss';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setIsLoading(true);
    console.log(inputValue);
    fetch(`http://localhost:8090/process-all/?dir_path=${inputValue}`)
      .then(response => {
        response.json();
        setIsLoading(false);
        if (response.status === 400) {
        } else {
          console.log('Data fetched successfully');
          navigate('/tree');
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.error('Error fetching data: ', error);
        // navigate('/tree');
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div class="project-title-div">
            <h1 id="project-title">#Repo_Mapper</h1>
          </div>
          <div className="dir_input_div">
            <input
              type="text"
              className="dir_input"
              placeholder="Github Repo Link / Local File Path"
              value={inputValue}
              onChange={handleInputChange}
            />
            <div className="hit-api-button" onClick={handleButtonClick}>
              <IoSend className="icon-arrow" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormComponent;
