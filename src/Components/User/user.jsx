import React from "react";
import "./User.css";
function User() {
    
    return (
      <div className="User">
        <div className="Sign">
         <h1 id="UserText1"> SIGN UP </h1>
         <input className="SingEmail" type="text" placeholder="Enter Your Email"></input>
         <input className="SingKey" type="password" placeholder="Your Password "></input>
         <button id="bt1">CONTINUE</button>
        </div>
        <div className="NewCostumer">
        <h1 id="UserText2">NEW COSTUMER</h1>
        <input className="NewEmail"  type="text" placeholder="Enter Your Email"></input>
        <p>I agree with the privacy and cookies policy and terms and conditions</p>
        <button id="bt2" >CONTINUE</button>

        </div>
      </div>
    );
  }
  
  export default User;