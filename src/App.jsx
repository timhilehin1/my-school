import Header from './Components/Header'
import app from './firebaseConfig'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HistoryCounter from './Components/HistoryCounter'
import Motto from './Components/Motto'
import Academics from './Components/Academics'
import StudentLife from './Components/StudentLife'
import Buildings from './Components/Buildings'
import Teachers from './Components/Teachers'
import Footer from './Components/Footer'
import Portal from './Components/Portal'
import PortalSignUp from './Components/PortalSignUp'
import PortalLogin from './Components/PortalLogin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

   const Home=() =>{
    return (
      <>
      <Header />
      <Navbar /> 
      <Hero />
          <section className='px-4 lg:px-8 py-2'>
              <HistoryCounter />
              <Motto/>
              {/* <Academics/> */}
              <StudentLife/>
              <Buildings />
              <Teachers />
          </section>
          <Footer />
      </>
    )
  }

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portal" element={<Portal />}/>
        <Route path='portalsignup' element={<PortalSignUp/>}/>
        <Route path='portalLogin' element={<PortalLogin/>}/>
      </Routes>
    </Router>
  </div>
  )
}

export default App
