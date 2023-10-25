import { useEffect, useState } from "react";
import "./MainContent.css";

const SyllabusItem = ({ name, progress, color }) => {
    const [width, setWidth] = useState(0);
  
    const progressBarStyle = {
      width: `${width}%`,
      backgroundColor: color,
      opacity:  1,
      zIndex: 9
    };
  
    useEffect(() => {
      const validProgress = Math.min(100, Math.max(0, progress));
      setWidth(validProgress);
    }, [progress]);
    return (
      <div className="SyllabusItem-container">
        <label className="itemName">{name}</label>
  
        <div className="progressWrapper">
          <div className="progress-bar">
            <div className="progress-bar-fill" style={progressBarStyle}></div>
          </div>
          <span
            style={{
              color: color,
            }}
          >{`${progress}%`}</span>
        </div>
      </div>
    );
  };
  
  const SyllabusAnalysis = () => {
    return (
      <div className="SyllabusAnalysis-container">
        <h3 className="syllabusTitle">Syllabus wise Analysis</h3>
        <div className="graph-wrapper">
          <SyllabusItem
            name={"HTML Tools, Forms, History"}
            progress={80}
            color={"#438AF6"}
          />
          <SyllabusItem
            name={"Tags & References in HTML"}
            progress={60}
            color={"#FF9142"}
          />
          <SyllabusItem
            name={"Tables & CSS Basics"}
            progress={24}
            color={"#FB5E5E"}
          />
          <SyllabusItem
            name={"Tables & CSS Basics"}
            progress={90}
            color={"#2EC971"}
          />
        </div>
      </div>
    );
  };

  export default SyllabusAnalysis