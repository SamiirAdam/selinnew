"use client";

import Header from './../components/Header'
import Hero from './../components/Hero'
import Projects from './../components/Projects'
import Skills from './../components/Skills'
import Contact from './../components/Contact'
import { useState, useEffect } from 'react'
import Particle from '@/components/Particles';
import { withClick } from '@/components/Pre';

export default function PortfolioPage() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const ClickableCard = withClick(Hero, Hero);

  return (
    <div>
      <Particle />
      <div className="flex flex-col max-h-screen w-full text-foreground relative">
        <Header />
        <main>
          <ClickableCard />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  )
}

