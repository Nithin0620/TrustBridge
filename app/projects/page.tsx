"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would typically come from an API call
const projects = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description:
      "Seeking an experienced developer to redesign and modernize our e-commerce platform with improved UI/UX using React and Node.js.",
    budget: "$5000 - $7000",
    salary: "$6000",
    duration: "3 months",
    difficulty: "Expert",
    skills: ["React", "Node.js", "CSS", "UX Design"],
    postedBy: "RetailMasters",
    postedDate: "2023-07-15",
  },
  {
    id: 2,
    title: "Logo Design for Startup",
    description:
      "We need a creative designer to craft a unique and memorable logo for our new startup.",
    budget: "$800 - $1500",
    salary: "$1200",
    duration: "1 week",
    difficulty: "Beginner",
    skills: ["Adobe Illustrator", "Photoshop", "Branding"],
    postedBy: "StartupHub",
    postedDate: "2023-07-12",
  },
  {
    id: 3,
    title: "Mobile App Development with Flutter",
    description:
      "Looking for a talented developer to create a cross-platform mobile app using Flutter and Dart.",
    budget: "$4000 - $6000",
    salary: "$5000",
    duration: "3 months",
    difficulty: "Advance",
    skills: ["Flutter", "Dart", "Firebase"],
    postedBy: "Mobile Innovations",
    postedDate: "2023-07-10",
  },
  {
    id: 4,
    title: "WordPress Website Customization",
    description:
      "Need a developer to customize and optimize our WordPress site with new plugins and themes.",
    budget: "$1500 - $2500",
    salary: "$2000",
    duration: "1 month",
    difficulty: "Beginner",
    skills: ["WordPress", "PHP", "CSS"],
    postedBy: "BlogPro",
    postedDate: "2023-07-08",
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description:
      "We require a developer to build an interactive data visualization dashboard using D3.js and React.",
    budget: "$3500 - $5000",
    salary: "$4500",
    duration: "2 months",
    difficulty: "Expert",
    skills: ["D3.js", "React", "JavaScript"],
    postedBy: "DataInsights",
    postedDate: "2023-07-05",
  },
  {
    id: 6,
    title: "Backend API Development",
    description:
      "Seeking a skilled backend developer to design and implement a RESTful API using Node.js and Express.",
    budget: "$3000 - $4500",
    salary: "$4000",
    duration: "2 months",
    difficulty: "Advance",
    skills: ["Node.js", "Express", "MongoDB"],
    postedBy: "API Solutions",
    postedDate: "2023-07-03",
  },
  {
    id: 7,
    title: "SEO and Content Strategy",
    description:
      "Looking for a digital marketing expert to enhance our SEO and content strategy to improve organic reach.",
    budget: "$2000 - $3000",
    salary: "$2500",
    duration: "1 month",
    difficulty: "Beginner",
    skills: ["SEO", "Content Writing", "Google Analytics"],
    postedBy: "MarketBoost",
    postedDate: "2023-07-01",
  },
  {
    id: 8,
    title: "AI Chatbot Integration",
    description:
      "Need an AI specialist to integrate a chatbot using Python and machine learning techniques for customer support.",
    budget: "$5000 - $8000",
    salary: "$7000",
    duration: "3 months",
    difficulty: "Expert",
    skills: ["Python", "Machine Learning", "NLP"],
    postedBy: "TechSolutions",
    postedDate: "2023-06-30",
  },
  // Add more project objects as needed
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Available Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="shadow-lg border rounded-lg flex flex-col">
            <CardHeader className="border-b p-4 flex flex-col items-start">
              {/* Difficulty Badge at the top */}
              <Badge className="mb-2 bg-red-500 text-white" variant="destructive">
                {project.difficulty}
              </Badge>
              <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              <div className="flex justify-between text-sm text-muted-foreground mt-1 w-full">
                <span>{project.postedBy}</span>
                <span>{project.postedDate}</span>
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-1">
              <p className="text-sm text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">Budget:</span>
                <span>{project.budget}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">Salary:</span>
                <span>{project.salary}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">Duration:</span>
                <span>{project.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <Button className="w-full">Apply for this Project</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
