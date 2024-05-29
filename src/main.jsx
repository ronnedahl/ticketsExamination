import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/home/HomePage.jsx'
import EventsPage from './pages/events/EventsPage.jsx'
import EventPage from './pages/event/EventPage.jsx'
import OrderPage from './pages/order/OrderPage.jsx'
import TicketsPage from './pages/tickets/TicketsPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router}/> */}

  </React.StrictMode>
)
