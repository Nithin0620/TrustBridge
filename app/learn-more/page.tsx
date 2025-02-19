import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Milestone, FileCodeIcon as FileContract, UserCheck, Star, Scale } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Escrow Payment System",
    description:
      "Our secure escrow system ensures that funds are safely held and only released upon successful completion of milestones or projects, protecting both freelancers and companies.",
  },
  {
    icon: Milestone,
    title: "Milestone-based Projects",
    description:
      "Break down complex projects into manageable milestones, allowing for clear progress tracking, easier management, and incremental payments.",
  },
  {
    icon: FileContract,
    title: "Smart Contract Agreements",
    description:
      "Utilize our smart contract system to create clear, enforceable agreements between parties, ensuring that all terms and conditions are transparently defined and easily accessible.",
  },
  {
    icon: UserCheck,
    title: "Verification Protocols",
    description:
      "Our multi-level identity and skill verification process helps build trust by confirming the credentials and expertise of both freelancers and companies on the platform.",
  },
  {
    icon: Star,
    title: "Comprehensive Reputation System",
    description:
      "Build and maintain your reputation through a detailed, verified performance history. Our system takes into account successful project completions, client satisfaction, and more.",
  },
  {
    icon: Scale,
    title: "Fair Dispute Resolution",
    description:
      "In case of disagreements, our platform offers a fair and transparent dispute resolution process, including mediation and arbitration options to ensure equitable outcomes.",
  },
]

export default function LearnMorePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Learn More About TrustBridge</h1>
      <p className="mb-12 text-center text-xl text-muted-foreground">
        Discover how TrustBridge is revolutionizing the way freelancers and companies collaborate, by providing a
        secure, transparent, and fair platform for remote work.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <feature.icon className="mr-2 h-6 w-6 text-primary" />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to experience the future of remote collaboration?</h2>
        <p className="mb-8 text-muted-foreground">
          Join TrustBridge today and start building trusted relationships in the world of remote work.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/freelancer/signup"
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            Sign Up as Freelancer
          </a>
          <a
            href="/company/signup"
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            Sign Up as Company
          </a>
        </div>
      </div>
    </div>
  )
}

