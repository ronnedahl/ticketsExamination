import React, { useEffect } from 'react'
import './tickets.css'
import { useCartStore } from '../../store/cartStore';
import { useState } from 'react';
function TicketsPage() {
    const { cart } = useCartStore();
    
    const [randomiD, setRandomiD]=useState('')
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const newRandomArray = [...letters, ...numbers];
        
        const randomLength = Math.floor(Math.random() * 10) +1
        console.log(randomLength)
        

       const index = Math.floor(Math.random() * newRandomArray.length);
       console.log(index)  
       
       let randomID = ''
       for (let i = 0; i < 6; i++) {
       
        const randomIndex = Math.floor(Math.random() * newRandomArray.length);
       
        randomID += newRandomArray[randomIndex];
    }
    useEffect(()=>{
        setRandomiD(randomID)
    },[])
    

   
    
    return (
        <div>
        {cart.map((tickets,index) => (
        <div className='tickets-wrapper' key={`${tickets.id}-${index}`}>
            <div className='tickets'>
                <div className='tickets__container'>
                    <div className='tickets__box'>
                        <div className='tickets__box-what'>
                            <p>WHAT</p>
                        </div>
                        <div className='tickets__box-title'>
                            <h1>{tickets.name}</h1>
                        </div>
                        <div className='tickets__box-dottedline'></div>
                        <div className='tickets__box-where'>
                            <p>WHERE</p>
                        </div>
                        <div className='tickets__box-place'>
                            <h2>{tickets.where}</h2>
                        </div>
                        
                        
                        <div className='tickets__containerbox'>
                            <div className='tickets__smallbox-1'>
                               
                                <div className='tickets__smallbox-1-date'>
                                <div className='tickets__smallbox-1-container'>
                                   <p>WHEN</p>
                                    <div className='date'>
                                        <h3>{tickets.when.date}</h3>
                                    </div>
                                    </div> 
                                </div>
                                </div>
                            <div className='tickets__smallbox-2'>
                            <div className='tickets__smallbox-1-date'>
                                <div className='tickets__smallbox-1-container'>
                                   <p>FROM</p>
                                    <div className='date'>
                                        <h3>{tickets.when.from}</h3>
                                    </div>
                                    </div> 
                                </div>

                            </div>
                            <div className='tickets__smallbox-3'>

                            <div className='tickets__smallbox-1-date'>
                                <div className='tickets__smallbox-1-container'>
                                   <p>TO</p>
                                    <div className='date'>
                                        <h3>{tickets.when.to}</h3>
                                    </div>
                                    </div> 
                                </div>

                            </div>
                            
                        
                        </div>
                        <p className='info'>INFO</p>
                        <h3 className='section'>Section c -seat 233, bring umbrella</h3>
                        <div className='tickets__barcode'>
                         <div className='tickets__barcode-text'>
                         dkdslsl
                        </div>
                         

                        </div>
                     <div className='tickets__randomID'>
                     <h5>#{randomID}</h5>
                    </div>
                     
                    </div>

                </div>
            </div>

        </div>
        ))}
        </div>
    )
}

export default TicketsPage
