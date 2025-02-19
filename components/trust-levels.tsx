import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const trustLevels = [
  {
    level: "Entry Trust",
    features: [
      "Basic identity verification",
      "Projects under $500",
      "Full escrow protection",
      "Guided onboarding",
      "Reduced fees for first project",
    ],
  },
  {
    level: "Established Trust",
    features: [
      "Enhanced verification",
      "Projects up to $3,000",
      "Flexible milestones",
      "Basic work guarantee insurance",
    ],
  },
  {
    level: "Premium Trust",
    features: [
      "Full background checks",
      "Unlimited project values",
      "Priority dispute resolution",
      "Comprehensive insurance",
    ],
  },
]

export default function TrustLevels() {
  return (
    <section id="trust-levels" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Trust Levels System</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {trustLevels.map((level, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {level.level}
                  <Badge variant={index === 2 ? "default" : "secondary"}>Level {index + 1}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-inside list-disc space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

