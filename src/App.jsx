import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Error from './components/Error'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'


function App() {

  return (
    <>
      <div className='container-fluid '>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
      </>
  )
}

export default App

export const myRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement :<Error/>,
    children : [
      {
        path : "/",
        element : <HomePage/>,
      },
      {
        path : "/about",
        element : <AboutPage/>,
      },
      {
        path : "/contact",
        element : <ContactPage/>,
      }

    ]
  }
])
