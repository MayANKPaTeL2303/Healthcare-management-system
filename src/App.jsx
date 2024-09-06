import Navbar from './components/Navbar'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Appointment from './pages/Appointment'
import TimeSlot from './pages/Time-Slot'
import { Error } from './pages/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// BrowserRouter is used to store the current location in the browser address bar 
// For profile I can use userParams 


function App() {  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<div><Home/></div>}/>
      <Route path='/contact' element={<div><ContactUs/></div>}/>
      <Route path='/appointment' element={<div><Appointment/></div>}/>
      <Route path='/timeslot' element={<div><TimeSlot/></div>}/>
      <Route path='*' element={<Error/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App