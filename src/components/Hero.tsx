import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-primary">Selin Yucelbak</span>
        </h1>
        <p className="mt-4 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          I'm a passionate web developer specializing in creating beautiful and functional websites.
          With expertise in React, Next.js, and modern web technologies, I bring ideas to life.
        </p>
        <div className="mt-8">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

