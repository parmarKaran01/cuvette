import Trophy from "../assets/trophy.png";
import Notepad from "../assets/notepad.png";
import Greentick from "../assets/greentick.png";
import "./MainContent.css";
const StatsItem = ({ image, value, title }) => {
    return (
      <div className="StatsItem-container">
        <div className="statsImage">
          <img src={image} className="image" />
        </div>
        <div className="infoWrapper">
          <p className="infoValue">{value}</p>
          <p className="infoTitle">{title}</p>
        </div>
      </div>
    );
  };
  
  const QuickStats = ({ rank, percentile, currentScore, maxScore }) => {
    return (
      <div className="QuickStats-container">
        <h3 className="quickStatHeader">Quick Statistics</h3>
        <div className="statswrapper">
          <StatsItem value={rank} title={"Your Rank"} image={Trophy} />
          <StatsItem
            value={`${percentile}%`}
            title={"Percentile"}
            image={Notepad}
          />
          <StatsItem
            value={`${currentScore}/${maxScore}`}
            title={"Correct Answers"}
            image={Greentick}
          />
        </div>
      </div>
    );
  };

  export default QuickStats