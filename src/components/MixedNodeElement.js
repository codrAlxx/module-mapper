import React, { useState, useRef } from 'react';
import { Space, Card } from 'antd';
import { AiFillEnvironment } from "react-icons/ai";

const CardComp = ({nodeData={}}) => (
  <Space direction="vertical" size={16} style={{color: "white"}}>
    <Card titleStyle={{ background: '#ff0000' , color: "white"}}
      hoverable
      title={<span style={{color: "white"}}>{nodeData.attributes.Type}</span>}
      extra={<span style={{color: "white"}}>{nodeData.name}</span>}
      style={{
        height: 300,
        width: 400,
        backgroundColor: '#7278ff',
        color: 'black',
        overflow: 'auto',
        zIndex: 1,
        color: "white",
        position: 'relative'
      }}
    >
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {nodeData.attributes &&
                Object.keys(nodeData.attributes).map((labelKey, i) => (
                  <li key={`${labelKey}-${i}`}>
                    {labelKey}: {nodeData.attributes[labelKey]}
                  </li>
                ))}
            </ul>
    </Card>
  </Space>
);

const MixedNodeElement = ({ nodeData = {}, triggerNodeToggle, foreignObjectProps = {} }) => {
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  const handleCircleHover = (hovering) => {
    setIsHovering(hovering);
    if (hovering) {
      clearTimeout(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    // setIsHovering(false);
    timerRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 500);
  };

  return (
    <React.Fragment>
      <circle style={{zIndex: -200}}
        r={25}
        onMouseEnter={() => handleCircleHover(true)}
        onMouseLeave={handleMouseLeave}
        onClick={triggerNodeToggle}
      >
      </circle> 


      <foreignObject {...foreignObjectProps} style={{zIndex: 100}}>
        <div
            style={{
              alignItems: 'center',
              paddingBottom: '1rem',
              width: '12vw',
              zIndex: 122,
              position: 'absolute'
            }}
          >
            {/* <h6 style={{color: "#444", fontWeight: 500, fontSize:  "20px"}}>{nodeData.name}</h6> */}

              {isHovering ? <CardComp nodeData={nodeData} />: <h6 style={{color: "#444", fontWeight: 500, fontSize:  "20px"}}>{nodeData.name}</h6>} 
              
        </div>

      </foreignObject>

      
    </React.Fragment>
  );
};

export default MixedNodeElement;