import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);

  const getItem = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setItem(response.data));
  };
   const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
   
    item[""] = 1;
    if(cart){
      var newItem = [...cart, item];
    }else{
      var newItem = [item];
    }
    localStorage.setItem("cart",JSON.stringify(newItem));
  };

  useEffect(() => {
    getItem();
  }, [id]);
  localStorage.clear();


  return (
    <div className="card-details-container">
      {item && (
        <div className="card-details">
          <div className="card-row">
            <img
              className="card-image-details"
              src={item.image}
              alt={item.title}
            />
            <div className="card-column">
              <h5 className="card-title-details">{item.title}</h5>
              <p className="card-item">
                Price: <h5 className="bolded">{item.price} €</h5>
              </p>
            </div>
          </div>
          <div className="card-body">
            <p className="card-item">Category: {item.category}</p>
            <p className="card-item">Description: {item.description}</p>
          </div>
          <button onClick={()=>addToCart(item,1)} className="button-buy">Buy me!</button>
        </div>
      )}
    </div>
  );
};

export default CardDetails;

