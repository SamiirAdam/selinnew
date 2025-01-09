import Header from './../components/Header'
import Hero from './../components/Hero'
import Projects from './../components/Projects'
import Skills from './../components/Skills'
import Contact from './../components/Contact'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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

