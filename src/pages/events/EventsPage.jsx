import './events.css'
import Navigation from '../../Components/navigation/Navigation'
import RenderList from '../../Components/renderList/RenderList'

function EventsPage({topEvents, setSelectedEvent}) {
   
    
    return (
        <>
       
        <div className="events-wrapper">
        <div className='events'>
            <div className='events__heading'>
                <h1>Events</h1>
            </div>


            <div className='events__input'>
                <input type="text" placeholder="search for events" />
            </div>
            
            <RenderList topEvents={topEvents} setSelectedEvent={setSelectedEvent}/>
            
           
        </div>
        <Navigation />
    </div>


       
        
        </>
    )
}

export default EventsPage



