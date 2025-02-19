import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would typically come from an API call
const projects = [
  {
    id: 1,
    title: "E-commerce Website Development",
    description: "Looking for a skilled developer to build a responsive e-commerce website using React and Node.js.",
    budget: "$3000 - $5000",
    duration: "2 months",
    skills: ["React", "Node.js", "MongoDB"],
    postedBy: "TechCorp Inc.",
    postedDate: "2023-06-01",
  },
  {
    id: 2,
    title: "Logo Design for Startup",
    description: "Need a creative designer to develop a modern logo for our tech startup.",
    budget: "$500 - $1000",
    duration: "2 weeks",
    skills: ["Graphic Design", "Branding", "Adobe Illustrator"],
    postedBy: "InnovateTech",
    postedDate: "2023-05-28",
  },
  // Add more project objects as needed
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Available Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{project.postedBy}</span>
                <span>{project.postedDate}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm">{project.description}</p>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-semibold">Budget:</span>
                <span className="text-sm">{project.budget}</span>
              </div>
              <div className="mb-4 flex justify-between">
                <span className="text-sm font-semibold">Duration:</span>
                <span className="text-sm">{project.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Proposal</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

