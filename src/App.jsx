import Header from './Components/Header'
import app from './firebaseConfig'
import { IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
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
import Grades from './Components/Grades'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notice from './Components/Notice';
import Account from './Components/Account';
import Statement from './Components/Statement';
import Payments from './Components/payments';



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

    const PortalNav = () => {
        return (
            <div className='w-full'>
            <nav className="border border-green-400 w-full flex justify-between p-2">
                <p className="font-bold">Qauafina</p>

                <div className="flex gap-4">
                      <IoNotifications size={20} />
                   <RxAvatar size={20} />
                    <p className="flex items-center">Student Name  <IoIosArrowDown className="" size={20} /> </p>
                    </div>
            </nav>

            <section className="advert border border-green-400">
                <p>trueeeeee</p>
                <p>trueeeeee</p>
                <p>trueeeeee</p>
            </section>
            </div>
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
                      <div className='main w-full md:ml-64 bg-[#f3f3f3]'>
                               <PortalNav/>
                              <Routes>
                              <Route path="profile" element={<Profile />} />
                              <Route path="grades" element={<Grades />} />
                              <Route path="notice" element={<Notice />} />
                              <Route path="account" element={<Account />} />
                              <Route path="statement" element={<Statement />} />
                                <Route path="payments" element={<Payments />} />
                              </Routes>
                       </div>

                  </section>}/>


      </Routes>
    </Router>
  </div>
  )
}

export default App
