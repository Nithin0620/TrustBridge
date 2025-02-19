import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import TrustLevels from "@/components/trust-levels"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <TrustLevels />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

