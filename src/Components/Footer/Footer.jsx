import React from "react";
import "./Footer.css";
import logo from "./Footer.img/T-Shirt.jpg"
import instagram from "./Footer.img/instagram.png";
import facebook from "./Footer.img/facebook.png";
import youtube from "./Footer.img/youtube.png";
import twitter from "./Footer.img/twitter.png";
import copy from "./Footer.img/copyright.png";

export default function endsection (){
    return(
        <footer>
            <div className="thefooter">
                <div className="iconleft">
                <a href="/">
                    <img className="footericon" src={logo} alt="logo"/>
                </a>
                    <img className="footericon" src={copy} alt="Copyright"/>
                </div>
                <div className="iconcenter">
                    <img className="footericon1" src={instagram} alt="Instagram logo"/>
                    <img className="footericon1" src={facebook} alt="Facebook logo"/>
                    <img className="footericon1" src={youtube} alt="Youtube logo"/>
                    <img className="footericon1" src={twitter} alt="Twitter logo"/>
                <div className="linkfooter">
                    <a href="policyprivacy"className="linkword">
                        <h2> Policy and Privacy</h2> 
                    </a>
                    <a href="/aboutus"className="linkword">
                        <h2>About us</h2>
                    </a>
                    <a href="ContactUs" className="linkword">
                        <h2>Contact us</h2>
                    </a>
                </div>
                </div>
            </div>
        </footer>
    )
}


