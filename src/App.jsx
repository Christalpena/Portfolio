import './App.css'
import { Suspense,lazy } from 'react'
import Home from "./Components/Home"

const Main = lazy(() => import('./Components/Main'))
const About = lazy(() => import("./Components/About"))
const Projects = lazy(() => import("./Components/Projects"))
const Footer = lazy(() => import("./Components/Footer"))


function App() {

  return (
      <section>
        <Home />
        <Main />
        <About />
        <Projects />
        <Footer />
      </section>
  )
}

export default App
