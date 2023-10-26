import React, { useState } from "react";
import "./Modal.css";
import HtmlLogo from "../assets/htmlLogo.png";

const StepComponent = ({ idx, title, state, setState }) => {
  return (
    <div className="StepComponent-container">
      <span className="index">{idx}</span>
      <p className="title">{title}</p>
      <input
        onChange={(e) => setState(e.target.value)}
        className="inputBox"
        value={state}
        type="number"
      />
    </div>
  );
};

const Modal = ({
  isOpen,
  onClose,
  rank,
  percentile,
  currentScore,
  setRank,
  setPercentile,
  setCurrentScore,
}) => {
  const [localRank, setLocalRank] = useState(rank);
  const [localPercentile, setLocalPercentile] = useState(percentile);
  const [localScore, setLocalScore] = useState(currentScore);

  const onSave = () => {
    setRank(localRank);
    setPercentile(localPercentile);
    setCurrentScore(localScore);
    onClose();
  };

  const stepsArray = [
    {
      title: (
        <span>
          Update Your <b>rank</b>
        </span>
      ),
      state: localRank,
      setState: setLocalRank,
    },
    {
      title: (
        <span>
          Update Your <b>percentile</b>
        </span>
      ),
      state: localPercentile,
      setState: setLocalPercentile,
    },
    {
      title: (
        <span>
          Update Your <b>current score (out of 15)</b>
        </span>
      ),
      state: localScore,
      setState: setLocalScore,
    },
  ];
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeaderWrapper">
          <h2 className="modalHeader">Update Scores</h2>
          <img src={HtmlLogo} className="htmlLogo" />
        </div>

        <hr className="hr" />

        <div className="steps-wrapper">
          {stepsArray.map((item, index) => {
            return (
              <StepComponent
                key={index}
                idx={index + 1}
                title={item.title}
                state={item.state}
                setState={item.setState}
              />
            );
          })}
        </div>
        <hr className="hr" />
        <div className="buttonWrapper">
          <button className="cancelBtn" onClick={onClose}>
            Cancel
          </button>
          <button className="saveBtn" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
