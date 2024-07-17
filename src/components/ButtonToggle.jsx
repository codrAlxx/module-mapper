import React from 'react';

const ButtonToggle = () => {
  const handleToggle = () => {
    const knob = document.querySelector('.knob');
    knob.classList.toggle('active');
  };

  return (
    <div className="holder">
      <input type="checkbox" className="toggle" onChange={handleToggle} />
      <div className="knob"></div>
      <div className="belt1"></div>
      <div className="belt2"></div>
      <div className="gear3"></div>
      <div className="gear9"></div>
      <div className="gear9 pos2"></div>
      <div className="gear2"></div>
      <div className="gear2 pos2"></div>
    </div>
  );
};

export default ButtonToggle;