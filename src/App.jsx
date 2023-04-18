import Header from './Components/Header'
import app from './firebaseConfig'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

function App() {

  return (
    <div className="App">
      <Header/>
          <Navbar />
          <Hero/>


    </div>
  )
}

export default App
