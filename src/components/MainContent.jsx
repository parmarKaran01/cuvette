import React, { useEffect, useState } from "react";
import "./MainContent.css";
import Modal from "./Modal";
import HtmlComponent from "./HtmlComponent";
import QuickStats from "./QuickStats";
import ComparisonComponent from "./ComparisonComponent";
import SyllabusAnalysis from "./SyllabusAnalysis";
import QuestionAnalysis from "./QuestionAnalysis";

const MainContent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState(37);
  const [currentScore, setCurrentScore] = useState(12);
  const maxScore = 15;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="MainContent-container">
      <h2 className="mainHeader">Skill Test</h2>
      <div className="skillAnalyticsWrapper">
        <div className="centerContainer">
          <HtmlComponent openModal={openModal} />
          <QuickStats
            rank={rank}
            percentile={percentile}
            currentScore={currentScore}
            maxScore={maxScore}
          />
          <ComparisonComponent percentile={percentile} score={currentScore} />
        </div>
        <div className="rightContainer">
          <SyllabusAnalysis />
          <QuestionAnalysis value={currentScore} limit={maxScore} />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        rank={rank}
        percentile={percentile}
        currentScore={currentScore}
        setRank={setRank}
        setPercentile={setPercentile}
        setCurrentScore={setCurrentScore}
      />
    </div>
  );
};

export default MainContent;
