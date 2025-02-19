import { Shield, Milestone, FileCodeIcon as FileContract, UserCheck, Star } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Escrow Payment System",
    description: "Secure funds and ensure fair payment for completed work.",
  },
  {
    icon: Milestone,
    title: "Milestone-based Projects",
    description: "Break down projects into manageable, verifiable stages.",
  },
  {
    icon: FileContract,
    title: "Smart Contract Agreements",
    description: "Clear, enforceable terms for both parties.",
  },
  {
    icon: UserCheck,
    title: "Verification Protocols",
    description: "Multi-level identity and skill verification for all users.",
  },
  {
    icon: Star,
    title: "Comprehensive Reputation",
    description: "Detailed, verified performance history for informed decisions.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Trust-Building Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

