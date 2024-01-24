import React from "react";
import "./Navbar.css";
import B_icon from "./NavBar_img/B_icon.jpg";
import t_Shirt from "./NavBar_img/T-Shirt.jpg";
import user from "./NavBar_img/user.png";
import search from "./NavBar_img/search-interface-symbol.png";
import question from "./NavBar_img/question.png";
import seguro from "./NavBar_img/seguro.png";

function Navbar() {
  return (
    <div className="img0">
      <nav>
        <div className="imgleft">
          <a href="/MenuIcon">
            <img className="NavBarIcon" src={B_icon} alt="B_icon" />
          </a>
          <a href="/">
            <img className="NavBarIcon" src={t_Shirt} alt="t_Shirt" />
          </a>
        </div>
        <div className="imgright">
          <a href="/user">
            <img className="NavBarIcon" src={user} alt="user" />
          </a>
          <a href="/o">
            <img className="NavBarIcon" src={search} alt="search" />
          </a>
          <a href="/help">
            <img className="NavBarIcon" src={question} alt="question" />
          </a>
          <a href="/cart">
            <img className="NavBarIcon" src={seguro} alt="seguro" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
