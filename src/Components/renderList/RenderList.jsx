import React from 'react';
import './renderlist.css'; 
import  {useState} from 'react'
import { Link } from'react-router-dom';
function RenderList({ topEvents,setSelectedEvent }) {
// const [selectedEvent, setSelectedEvent] = useState(null)
 
const handleEventClick = (event) => {
  setSelectedEvent(event)
  console.log(`Detta är eventet ${event.name}`)
 
}
  

return (
    <>
      <div className='events__container'>
        {topEvents.map((event) => ( 
          <Link to={`/event/${event.id}`} key={event.id}>
          <div className='events__container-col' key={event.id} onClick={() => handleEventClick(event)}> 
            <div className='events__number'>
              <p className='month'>{event.when.date}</p> 
            
            </div>
            <div className='events__text'>
              <h2>{event.name}</h2> 
              <h3>{event.where}</h3> 
              <h4>{event.when.from} {event.when.to}</h4> 
            </div>
            <div className='events__price'>
              <h5>{`${event.price} sek`}</h5> 
            </div>
          </div>
          
          
          </Link>
        ))}
      </div>
    </>
  );
}

export default RenderList;