import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/HomePage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Help from "./Components/Help/help";
import ContactUs from "./Components/ContactUs/contactus";
import User from './Components/User/user';
import CardDetails from "./Components/CardDetails/CardDetails";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Menu from"./Components/MenuIcon/MenuIcon"
import Plcpvc from "./Components/policyprivacy/Policyprivacy";
import Cart from "./Components/Cart/cart"


function App() {
  return (
    <div >
      <Navbar/>
      <div className="allapp">
      <Router>
        <Routes>
          <Route path="/item/:id" element={<CardDetails/>} />
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/MenuIcon" element={<Menu />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/user" element={<User/>}/>
          <Route path="/policyprivacy" element={<Plcpvc/>}/>
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;

