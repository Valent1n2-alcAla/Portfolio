import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToHash from './components/ScrollToHash/ScrollToHash'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Project from './pages/Project/Project'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <span id="top" />
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projets/:slug" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App