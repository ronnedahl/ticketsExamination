
import EventsPage from "./pages/events/EventsPage"
import EventPage from "./pages/event/EventPage"
import OrderPage from "./pages/order/OrderPage"
import TicketsPage from "./pages/tickets/TicketsPage"
import axios from "axios"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useState, useEffect } from "react"
import HomePage from "./pages/home/HomePage"
import Navigation from "./Components/navigation/Navigation"


function App() {
  const [topEvents, setTopEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  const fetchTopEvents = async () => {
    try {
      const resp = await axios.get('https://santosnr6.github.io/Data/events.json')
      setTopEvents(resp.data.events)


    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTopEvents()
  }, [])




  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage setSelectedEvent={setSelectedEvent} topEvents={topEvents} />} />
            <Route path="/event/:id" element={<EventPage selectedEvent={selectedEvent} topEvents={topEvents} />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
          </Routes>
          <Navigation />
        </BrowserRouter>




      </div>

    </>
  )
}

export default App
