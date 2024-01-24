import React from 'react';
import "./HomePage.css"
import { useState } from 'react';
import clothing1 from "../API_img/1ef558b854723b95998a796ff1ccb410.jpg"
import clothing2 from "../API_img/289e0dc040aca1d87f0536e43969b15a--hipster-gifts-hipster-fashion.jpg"
import clothing3 from "../API_img//408098cbe98b36b3f2c68cccc64d8b2b.jpg"
import clothing4 from "../API_img/Bags/28989.jpg"
import clothing5 from "../API_img/Bags/81PtF30TLUL._UL1500_.jpg"
import clothing6 from "../API_img/Dress/0c9c37266bfbd0c3a07ad3a2319a4008.jpg"
import clothing7 from "../API_img/Dress/7fbc6d8ae02603040b109888aef84726.jpg"
import clothing8 from "../API_img/Femalepants/ljsl31jmwju_clightalton_vwju.jpg"
function Home() {
  const [currentImage, setCurrentImage] = useState(clothing1);

    const handleClick = () => {
      if (currentImage === clothing1) {
        setCurrentImage(clothing2);
      } else if (currentImage === clothing2) {
        setCurrentImage(clothing3);
      } else if (currentImage === clothing3) {
        setCurrentImage(clothing4);
      } else if (currentImage === clothing4) {
        setCurrentImage(clothing5);
      } else if (currentImage === clothing5) {
        setCurrentImage(clothing6);
      } else if (currentImage === clothing6) {
        setCurrentImage(clothing7);
      } else if (currentImage === clothing7) {
        setCurrentImage(clothing8);
      } else {
        setCurrentImage(clothing1);
      }
    };

  return (
    <div className="clothing">
      <img className='image-home' src={currentImage} alt="clothing" onClick={handleClick} />
    </div>
  );
};

export default Home;
