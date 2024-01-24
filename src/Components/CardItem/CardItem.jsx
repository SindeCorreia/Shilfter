import React from 'react';
import "./CardItem.css";

const CardItem = ({ item, onRemove }) => {
  const handleRemove = () => {
    onRemove(item);
  };

  return (
    <div className='card'>
      <h5 className="card-title">{item.title}</h5>
      <img className='card-image' src={item.image} alt={item.title} />
      <p className='card-item price'>Price: <span className='bolded'>{item.price} €</span></p>
      <button onClick={handleRemove}>Remover</button>
    </div>
  );
};

export default CardItem;
