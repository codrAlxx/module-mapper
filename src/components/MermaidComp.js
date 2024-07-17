import React from "react";
import ReactDOM from "react-dom";
import Mermaid from "./Mermaid";
import example from "../examples/ExampleMermaid";
import "./mermaid.css";



function MermaidComp() {
  console.log(example)
  return (
    <div className="merm">
      <Mermaid chart={example} />
    </div>
  );
}
export default MermaidComp