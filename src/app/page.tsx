import Header from './../components/Header'
import Hero from './../components/Hero'
import Projects from './../components/Projects'
import Skills from './../components/Skills'
import Contact from './../components/Contact'

export default function PortfolioPage() {
  return (
    <div className="flex flex-col max-h-screen w-full text-foreground">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

