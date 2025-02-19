import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
          Building Trust Between
          <br />
          Freelancers and Companies
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Secure, transparent, and fair collaboration platform for remote work
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

