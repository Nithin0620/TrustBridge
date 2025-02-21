import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          TrustBridge
        </Link>
        {/* <nav className="hidden space-x-4 md:flex"> */}
          {/* <Link href="/getting-started" className="text-muted-foreground hover:text-primary">
            Getting Started
          </Link>
          <Link href="/learn-more" className="text-muted-foreground hover:text-primary">
            Learn More
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            For Freelancers
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            For Companies
          </Link> */}
        {/* </nav> */}
        <div className="flex space-x-2">
          <div className="space-x-2">
            <Button variant="outline" asChild>
              <Link href="/freelancer/login">Freelancer Login</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/company/login">Company Login</Link>
            </Button>
          </div>
          <div className="space-x-2">
            <Button asChild>
              <Link href="/freelancer/signup">Freelancer Signup</Link>
            </Button>
            <Button asChild>
              <Link href="/company/signup">Company Signup</Link>
            </Button>
            <Button asChild>
              <Link href="/">Company Signup</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
