import React from 'react'
import { useCartStore } from '../../store/cartStore';
import { useRandomIDStore } from '../../store/randomIDStore';
import { useEffect, useState } from 'react';
import { useTicketStore } from '../../store/ticketStore'

function CardTickets() {
    const [tickets, setTickets] = useState([])
    const { cart } = useCartStore();
    const { randomID, generateRandomID } = useRandomIDStore();
    const { countTickets, addToTickets, removeTickets, addToOrder, removeToOrder,countorderTickets } = useTicketStore();

    useEffect(() => {
        const newTickets = []
       
        cart.forEach(cartitem => {
            
            //här slumpas sektion fram och sittplats fram
            const sectionRandom = `Section ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
            let seatRandom = Math.floor(Math.random() * 100) + 1;
           
            for (let i = 0; i < cartitem.quantity+countorderTickets        ; i++) {
                
                console.log(`hur många counttickets skrivs ut ${countTickets}`)   
                generateRandomID()
                const ticket = {
                    
                    name: cartitem.name,
                    where: cartitem.where,
                    when: {

                        date: cartitem.when.date,
                        from: cartitem.when.from,
                        to: cartitem.when.to
                    },
                    section: sectionRandom,
                    seat: `Seat ${seatRandom +i}`,
                    randomID: generateTicketId(5)

                }
                newTickets.push(ticket)



                
            }
        })
        setTickets(newTickets)
       
        console.log(newTickets)

    }, [cart,countorderTickets])

    const generateTicketId = (len) => {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = [];
    
        for(let i = 0; i < len; i++){
            let rand = Math.floor(Math.random() * chars.length);
            code.push(chars[rand]);
        }
    
        return code.join('');
    }
    


    return (
        <div className='tickets-wrapper'>
            {tickets.map((newTicket, index) => {
                return <div className='tickets' key={index}>
                    <div className='tickets__container'>
                        <div className='tickets__box'>
                            <div className='tickets__box-what'>
                                <p>WHAT</p>
                            </div>
                            <div className='tickets__box-title'>
                                <h1>{newTicket.name}</h1>
                            </div>
                            <div className='tickets__box-dottedline'></div>
                            <div className='tickets__box-where'>
                                <p>WHERE</p>
                            </div>
                            <div className='tickets__box-place'>
                                <h2>{newTicket.where}</h2>
                            </div>


                            <div className='tickets__containerbox'>
                                <div className='tickets__smallbox-1'>

                                    <div className='tickets__smallbox-1-date'>
                                        <div className='tickets__smallbox-1-container'>
                                            <p>WHEN</p>
                                            <div className='date'>
                                                <h3>{newTicket.when.date}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='tickets__smallbox-2'>
                                    <div className='tickets__smallbox-1-date'>
                                        <div className='tickets__smallbox-1-container'>
                                            <p>FROM</p>
                                            <div className='date'>
                                                <h3>{newTicket.when.from}</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='tickets__smallbox-3'>

                                    <div className='tickets__smallbox-1-date'>
                                        <div className='tickets__smallbox-1-container'>
                                            <p>TO</p>
                                            <div className='date'>
                                                <h3>{newTicket.when.to}</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <p className='info'>INFO</p>
                            <h3 className='section'>Section {newTicket.section} -{newTicket.seat}, bring umbrella</h3>
                            <div className='tickets__barcode'>
                                <div className='tickets__barcode-text'>
                                    dkdslsl
                                </div>


                            </div>
                            <div className='tickets__randomID'>
                                <h5>{newTicket.randomID}</h5>
                            </div>

                        </div>

                    </div>
                </div>

            }
            )}
        </div>
    )
}

export default CardTickets
