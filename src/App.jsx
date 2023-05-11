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
import StudentDashboard from './Components/StudentDashboard'
import Sidebar from './Components/Sidebar'
import Profile from './Components/Profile'
import Test1 from './Components/Test1'
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
        <Route path='portalLogin' element={<PortalLogin />} />
                  <Route path='studentDashboard/*' element={<section className="studentDashboard block md:flex ">
                      <Sidebar />
                      <div className='main w-full bg-[#f3f3f3]'>
                              <Routes>
                              <Route path="profile" element={<Profile />} />
                              <Route path="test1" element={<Test1 />} />
                              </Routes>
                       </div>

                  </section>}/>


      </Routes>
    </Router>
  </div>
  )
}

export default App
