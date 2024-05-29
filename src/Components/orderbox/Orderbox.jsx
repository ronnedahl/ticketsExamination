import React from 'react'
import './orderbox.css'
import { useCartStore } from '../../store/cartStore';
import { useState } from 'react';
import { useTicketStore } from '../../store/ticketStore'
function Orderbox() {
  const { cart } = useCartStore();
  const { countTickets, addToTickets, removeTickets, addToOrder, removeToOrder,countorderTickets } = useTicketStore();
 



  return (
    <div>
      {cart.map((item, index) => (

        <div className="orderBox" key={`${index}`}>
          <div className="orderBox__box-one">
            <h5>{item.name}</h5>
            <h6>{item.when.date} {item.when.from} - {item.when.to}</h6>
          </div>
          <div className="orderBox__box-two">
            <div className="orderBox__quantity">

            </div>
            <div onClick={addToOrder} className="orderBox__small-box-1">
              <p>+</p>
            </div>
            <div className="orderBox__small-box-2">
              <p>{countTickets+countorderTickets}</p>
            </div>
            <div onClick={removeToOrder} className="orderBox__small-box-3">

              <p>-</p>
            </div>

          </div>

        </div>



      ))}


    </div>
  )
}

export default Orderbox
