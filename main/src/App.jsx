import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Navbar,
Works } from "./components"
import Tech from "./components/Tech"


function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary scrollbar-hide">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
        </div>
        <About/>
        <Tech/>
        <Experience/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
