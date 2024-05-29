import React, { useEffect } from 'react'
import './tickets.css'
import { useCartStore } from '../../store/cartStore';
import { useState } from 'react';
import CardTickets from '../../Components/tickets/CardTickets';
function TicketsPage() {
    const { cart } = useCartStore();
    
    




    return (
        <div>
            {


                <CardTickets />

            }

        </div>
    )
}

export default TicketsPage
