import React from 'react'
import './orderbox.css'
import { useCartStore } from '../../store/cartStore';
function Orderbox() {
    const { cart } = useCartStore();
  
    return (
    <div>
 {cart.map((item,index) => (
          
       
            <div className='order__box-container' key={`${item.id}-${index}`}>
              <div className='order__box'>
                <div className='order__box-1'>
                  <h6>{item.name}</h6>
                </div>
                
                <div className='order__time'>
                <p>{item.when.date} {item.when.from} - {item.when.to}</p>
                </div>
                
                <div className='order__box-2'>
                  <div className='box-1'>
                    <p>+</p>
                  </div>
                  <div className='box-2'>
                    <p>{item.quantity}</p> 
                  </div>
                  <div className='box-3'>
                    <p>-</p>
                  </div>
                </div>
              </div>
            </div>
         
        ))}


    </div>
  )
}

export default Orderbox
