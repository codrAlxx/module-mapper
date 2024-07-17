import React from 'react';
import './Loader.css'
const Loader = () => {
  return (
    <main>
      <div className="preloader">
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
      </div>
      <div className="status">
      </div>
    </main>
  );
};

export default Loader;