import React from "react";
import "./help.css";
import imjhelp1 from "./HelpImg/Phone.png";
import imjhelp2 from "./HelpImg/Email.png";

function Help() {
    
  return (
    <div className="Help">
      <div className="NameHelp">
       <h2 id="HelpText1"> NAME </h2>
       <input className="NameHelp1" type="text" placeholder="TYPE YOUR NAME"></input>
      </div>
      <div className="EmailHelp">
       <h2 id="HelpText1"> EMAIL </h2>
       <input className="EmailHelp1" type="text" placeholder="Enter Your Email"></input>
      </div>
      <div className="CommentsHelp">
       <h2 id="HelpText1"> COMMENTS </h2>
       <input className="CommentsHelp1" type="text" placeholder="PLEASE DESCRIBE THE PROBLEM"></input>
      </div >
      <div className="HelpIcon">
      <img className="PhoneIcon" src={imjhelp1} alt="Phone Icon" />
      <img className="EmailIcon" src={imjhelp2} alt="Email Icon" />
      </div>
      </div>
    )
  }
  
  export default Help;
  