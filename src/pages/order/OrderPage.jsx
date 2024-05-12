import React from 'react';
import './order.css';
import { useCartStore } from '../../store/cartStore';
import Navigation from '../../Components/navigation/Navigation';
import Orderbox from '../../Components/orderbox/Orderbox';
import { Link } from'react-router-dom';

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
    <Navigation/>
    </div>
  );
}

export default OrderPage;
