import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TreeDiag from './components/TreeDiag';
import HomePage from './components/HomePage';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/tree" element={<TreeDiag />} />
        </Routes>
    </Router>
  );
};

export default App;