import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import TrustLevels from "@/components/trust-levels"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

import StickyButton from "@/components/StickyButton"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <StickyButton/>
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

