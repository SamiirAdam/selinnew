import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/uva.jpg",
    tags: ["Adam", "Shameless", "Head"],
    link: "#"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/uva.jpg",
    tags: ["Aryan", "Roses", "Rooibos"],
    link: "#"
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/uva.jpg",
    tags: ["Duolingo", "Shooting", "Stars"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col w-full py-24 sm:py-24">
      <h2 className="text-3xl text-gray-500 font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-md w-full object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle className='text-xl text-purple-700'>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">{tag}</Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

