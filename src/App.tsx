import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToHash from './components/ScrollToHash/ScrollToHash'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Project from './pages/Project/Project'

function App() {
  return (
    <>
      <span id="top" />
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projets/:slug" element={<Project />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App