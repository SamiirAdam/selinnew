import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card } from "./ui/card"

export default function Hero() {
  return (
    <div className="flex w-full justify-center">
      <Card className="flex w-full flex-col items-center md:w-1/2 mt-10 text-center px-20 sm:px-5 py-24 sm:py-32">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-purple-700">
          Hi, My name is <span className="text-primary">Selin Yucelbak</span>
        </h1>
        <div className="flex flex-col md:flex-row md:justify-around w-full md:w-1/2 mt-10">
          <Image src="/image.jpeg" alt="Selin Yucelbak" width={300} height={300} className="flex rounded-full justify-center shadow-md shadow-purple-700 object-cover" />
          <div className="flex flex-col items-center">
            <p className="mt-4 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              Adam loves me!
            </p>
            <div className="mt-8">
              <Button asChild className="bg-purple-700 text-white font-bold border-black border-1">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

