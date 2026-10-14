import Hero from '../../sections/Hero/Hero'
import About from '../../sections/About/About'
import Skills from '../../sections/Skills/Skills'
import ProjectsSection from '../../sections/Projects/ProjectsSection'
import Experience from '../../sections/Experience/Experience'
import Method from '../../sections/Method/Method'
import Contact from '../../sections/Contact/Contact'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <Experience />
      <Method />
      <Contact />
    </main>
  )
}

export default Home