import "./MainContent.css";
import PieChart from "./PieChart";
const QuestionAnalysis = ({ value, limit }) => {
    const description = (
      <span>
        <b>{`You scored ${value} question correct out of ${limit}. `}</b>
        {value !== limit
          ? ` However it
          still needs some improvements`
          : ""}
      </span>
    );
    return (
      <div className="QuestionAnalysis-container">
        <div className="headerWrapper">
          <h3 className="title">Question Analysis</h3>
          <span className="value">{`${value}/${limit}`}</span>
        </div>
  
        <p className="desc">{description}</p>
        <PieChart value={value} limit={limit} />
      </div>
    );
  };

  export default QuestionAnalysis