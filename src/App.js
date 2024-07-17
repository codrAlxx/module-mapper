import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import TreeDiag from './components/TreeDiag';
import MermaidComp from './components/MermaidComp';
import BaseComp from './components/BaseComp'


const App = () => {
  return (
    <BaseComp/>
    // <TreeDiag/>
    // <MermaidComp/>
    // <Router>
    //     <Routes>
    //       <Route exact path="/" component={MermaidComp} />
    //       <Route path="/tree" component={TreeDiag} />
    //     </Routes>
    // </Router>
  );
};

export default App;