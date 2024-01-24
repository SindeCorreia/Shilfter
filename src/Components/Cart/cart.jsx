import React from "react";

function Cart() {
   const cart = JSON.parse(localStorage.getItem('cart')) || [];
   return (
      cart.length !== 0
         ? (
            cart.map((item, index) => (
               <div key={index}>
                  <h5 className="card-title">{item.title}</h5>
                  <img className='card-image' src={item.image} alt={item.title} />
                  <p className='card-item price'>Price: <h5 className='bolded'>{item.price} €</h5> </p>
                  <button>Remove</button>
               </div>
            ))
         ) : (
            <h1>SEM ITENS</h1>
         )
   )
}

export default Cart;
