import Hero from '../../sections/Hero/Hero'
import About from '../../sections/About/About'
import Skills from '../../sections/Skills/Skills'
import ProjectsSection from '../../sections/Projects/ProjectsSection'
import Experience from '../../sections/Experience/Experience'
import Method from '../../sections/Method/Method'
import Contact from '../../sections/Contact/Contact'
import useReveal from '../../hooks/useReveal'

function Home() {
  useReveal('main > section:not(.hero)')

  return (
    <main id="contenu" tabIndex={-1}>
      <title>Valentin Alcala, développeur web et mobile</title>
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