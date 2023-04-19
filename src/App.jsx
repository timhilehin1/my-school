import Header from './Components/Header'
import app from './firebaseConfig'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HistoryCounter from './Components/HistoryCounter'

function App() {

  return (
    <div className="App">
      <Header/>
          <Navbar />
          <Hero />
          <section className='px-4 lg:px-16 py-2'>
             <HistoryCounter/>
          </section>


    </div>
  )
}

export default App
