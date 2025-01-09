import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Next.js", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["TypeScript", "Node.js", "Express"],
    link: "#"
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle>{project.title}</CardTitle>
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
