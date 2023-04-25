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


function App() {

  return (
    <div className="App">
      <Header/>
          <Navbar />
          <Hero />
          <section className='px-4 lg:px-8 py-2'>
              <HistoryCounter />
              <Motto/>
              {/* <Academics/> */}
              <StudentLife/>
              <Buildings />
              <Teachers/>
          </section>


    </div>
  )
}

export default App
