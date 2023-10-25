import "./MainContent.css";
import LineGraph from "./LineGraph";
import GraphIcon from "../assets/graph.png";
const ComparisonComponent = ({ score, percentile }) => {
    return (
      <div className="ComparisonComponent-container">
        <div className="headercontent-wrapper">
          <div className="headercontent">
            <h3 className="header-title">Comparison Graph</h3>
            <p className="header-para">
              <b>{`You scored ${percentile}% percentile `}</b>
              {`which is lower than the average percentile 72% of all the engineers who took this assessment`}
            </p>
          </div>
          <div className="statsImage">
            <img src={GraphIcon} className="image" />
          </div>
        </div>
  
        <LineGraph score={score} percentile={percentile} />
      </div>
    );
  };

  export default ComparisonComponent