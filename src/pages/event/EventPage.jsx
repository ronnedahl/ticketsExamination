import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './event.css';
import { useCartStore } from '../../store/cartStore';
import { Link } from'react-router-dom';
function EventPage({ topEvents }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { id } = useParams();
  const [countTickets, setCountTickets] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const { addToCart, cart, calculatePriceTota } = useCartStore()

    const calculatePriceTotal = () => {
    if (selectedEvent) {
      const totalPrice = selectedEvent.price * countTickets;
      setPriceTotal(totalPrice);
    }
  };

  useEffect(() => {
    console.log(cart); 
  }, [cart]); 
  
    const add = () => {
    if (selectedEvent) {
      const newItem = {
        id: selectedEvent.id,
        name: selectedEvent.name,
        price: selectedEvent.price,
        quantity: countTickets,
        where: selectedEvent.where,
        when:{

          date:selectedEvent.when.date,
          from:selectedEvent.when.from,
          to:selectedEvent.when.to
        }
      };
      console.log(newItem)
      addToCart(newItem)
      
     };
  }

    const addToTickets = () => {
    setCountTickets(countTickets + 1);
  };

  const removeTickets = () => {
    if (countTickets > 0) {
      setCountTickets(countTickets - 1);
    }
  };

    useEffect(() => {
    const event = topEvents.find((event) => event.id === id);

    setSelectedEvent(event);
    if (event) {
      setPriceTotal(event.price);
    }
  }, [id, topEvents]);

  useEffect(() => {
    calculatePriceTotal();
  }, [selectedEvent, countTickets, calculatePriceTotal]);



  return (
    <div className="event-wrapper">
      <div className="event">
        <div className="event__title">
          <h1>Event</h1>
        </div>
        <div className="event__subtitle">
          <h2>You are about to score some tickets to</h2>
        </div>
        
        <div className="event__text">
          <h3>{selectedEvent && selectedEvent.name}</h3>
          <h4>
            {selectedEvent && selectedEvent.when.from} {selectedEvent && selectedEvent.when.to}
          </h4>
          <h5>{selectedEvent && selectedEvent.where}</h5>
        </div>
        
        
        <div className="event__box-container">
          <div className="event__box">
            <div className="event__box-1">
              <h6>{priceTotal}</h6>
            </div>
            <div className="event__box-2">
              <div onClick={addToTickets} className="box-1">
                <p>+</p>
              </div>
              <div className="box-2">
                <p>{countTickets}</p>
              </div>
              <div onClick={removeTickets} className="box-3">
                <p>-</p>
              </div>
            </div>
          </div>
        </div>
        <div className="event__button">
        <Link to="/order">
          <button onClick={() => add()}>Lägg i Varukorg</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
