import React from 'react';
import './order.css';
import { useCartStore } from '../../store/cartStore';
import Orderbox from '../../Components/orderbox/Orderbox';
import { Link } from 'react-router-dom';
import { useTicketStore } from '../../store/ticketStore'

function OrderPage() {
  const { cart } = useCartStore();

  return (
    <div className='order-wrapper'>
      <div className='order'>
        <div className='order__title'>
          <h1>Order</h1>
        </div>

        <Orderbox />
      </div>
      <div className='order__button'>
        <Link to="/tickets">
          <button>Skicka Order</button>
        </Link>
      </div>

    </div>
  );
}

export default OrderPage;
