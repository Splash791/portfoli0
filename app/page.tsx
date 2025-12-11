import Hero from '../components/hero'
import About from '../components/about'
import Projects from '../components/projects'
import Experience from '../components/experience'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
    </main>
  )
}

