import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", 
  "Node.js", "Express", "MongoDB", "SQL", "Git", "Responsive Design"
]

export default function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="text-lg py-2 px-4">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

