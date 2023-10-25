import "./MainContent.css";
import HtmlLogo from "../assets/htmlLogo.png";
const HtmlComponent = ({ openModal }) => {
    return (
      <div className="HtmlComponent-container">
        <div className="content-wrapper">
          <img src={HtmlLogo} className="htmlLogo" />
          <div>
            <h3 className="title">Hypertext Markup Language</h3>
            <p className="questions">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>
  
        <button className="htmlCompBtn" onClick={openModal}>
          Update
        </button>
      </div>
    );
  };

export default HtmlComponent