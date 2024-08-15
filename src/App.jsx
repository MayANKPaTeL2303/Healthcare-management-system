import Navbar from './components/Navbar'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import ContactUs from './pages/ContactUs'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// For profile I can use userParams 


function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Navbar/><Home/></div>
  },
  {
    path: '/appointment',
    element: <div><Navbar/><Appointment/></div>
  },
  {
    path: '/contact',
    element: <><Navbar/><ContactUs/></>
  },
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App