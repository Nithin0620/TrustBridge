export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;  // Optional image for the project
  githubUrl?: string; // Optional GitHub repository link
  liveUrl?: string;   // Optional live demo link
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack online shopping platform",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/e-commerce",
    liveUrl: "https://e-commerce-demo.com"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Real-time collaborative task management",
    techStack: ["Next.js", "Firebase", "Tailwind"]
  },
  {
    id: 3,
    title: "Example Project",
    description: "This is an example project",
    techStack: ["React", "TypeScript", "Next.js"]
  }
];