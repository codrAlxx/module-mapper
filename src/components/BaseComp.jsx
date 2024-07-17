import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import TreeDiag from './TreeDiag';
import MermaidComp from './MermaidComp';
import ButtonToggle from './ButtonToggle';


const BaseComp = () => {
  const [showMermaid, setShowMermaid] = useState(false);

  const toggleComponent = () => {
    setShowMermaid((prev) => !prev);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {showMermaid ? <MermaidComp /> : <TreeDiag />}
      
      <button 
        onClick={toggleComponent}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          background: '#007bff',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        {showMermaid ? 'Show Tree' : 'Show Mermaid'}
      </button>
    </div>
  );
};


export default BaseComp;